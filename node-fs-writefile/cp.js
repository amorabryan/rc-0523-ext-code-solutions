import { writeFile, readFile } from 'node:fs/promises';

async function cp() {
  try {
    const contents = await readFile(process.argv[2], 'utf-8');
    const copyFile = process.argv[3];
    await writeFile(copyFile, `${contents}\n`);
  } catch (error) {
    console.log('Error:', error);
  }
}

cp();
