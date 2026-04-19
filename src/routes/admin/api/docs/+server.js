import fs from 'fs/promises';
import path from 'path';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	try {
		const { filename, content } = await request.json();
		
		if (!filename || !content) {
			return json({ success: false, error: 'Missing filename or content' }, { status: 400 });
		}

		// Ensure filename is safe (alphanumeric and dashes)
		const safeFilename = filename.toLowerCase().replace(/[^a-z0-9-]/g, '');
		if (!safeFilename) {
			return json({ success: false, error: 'Invalid filename' }, { status: 400 });
		}

		let dirPath;
		let filePath;

		// if they name it 'index' or 'root', it overwrites the main /docs/+page.md
		if (safeFilename === 'index' || safeFilename === 'root') {
			dirPath = path.resolve('src/routes/docs');
			filePath = path.join(dirPath, '+page.md');
		} else {
			dirPath = path.resolve(`src/routes/docs/${safeFilename}`);
			filePath = path.join(dirPath, '+page.md');
		}

		// Explicitly create directory if it doesn't exist
		await fs.mkdir(dirPath, { recursive: true });

		// Write the markdown file
		await fs.writeFile(filePath, content, 'utf8');

		return json({ 
			success: true, 
			path: safeFilename === 'index' || safeFilename === 'root' ? '/docs' : `/docs/${safeFilename}` 
		});
	} catch (error) {
		console.error("Error writing docs:", error);
		return json({ success: false, error: error.message }, { status: 500 });
	}
}
