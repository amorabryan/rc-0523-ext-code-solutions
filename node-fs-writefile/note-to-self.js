import { writeFile } from 'node:fs/promises';

async function notetoSelf() {
  try {
    const note = String(process.argv[2]);
    await writeFile('note.txt', `${note}\n`);
  } catch (error) {
    console.log(`Error:, ${error}`);
  }
}

notetoSelf();
