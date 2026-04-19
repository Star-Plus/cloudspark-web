import fs from 'fs/promises';
import path from 'path';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	try {
		const newEntry = await request.json();
		
		// Validate
		if (!newEntry.version || !newEntry.date || !newEntry.title || !newEntry.body) {
			return json({ success: false, error: 'Missing required fields' }, { status: 400 });
		}

		const jsonPath = path.resolve('src/lib/data/changelog.json');
		let logs = [];
		try {
			const fileData = await fs.readFile(jsonPath, 'utf8');
			logs = JSON.parse(fileData);
		} catch (e) {
			// File doesn't exist or is invalid, assume empty
		}

		// Insert at the beginning
		logs.unshift(newEntry);

		// Write back to file
		await fs.writeFile(jsonPath, JSON.stringify(logs, null, 4), 'utf8');

		return json({ success: true });
	} catch (error) {
		console.error("Error writing changelog:", error);
		return json({ success: false, error: error.message }, { status: 500 });
	}
}
