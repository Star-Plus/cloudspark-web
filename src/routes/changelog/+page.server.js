import fs from 'fs/promises';
import path from 'path';

export async function load() {
	try {
		const jsonPath = path.resolve('src/lib/data/changelog.json');
		const fileData = await fs.readFile(jsonPath, 'utf8');
		const logs = JSON.parse(fileData);
		return { logs };
	} catch (error) {
		console.error("Failed to load changelog.json", error);
		return { logs: [] };
	}
}
