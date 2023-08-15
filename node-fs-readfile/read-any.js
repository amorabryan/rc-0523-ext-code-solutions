import { readFile } from 'node:fs/promises';

async function readAny() {
  try {
    const filePath = process.argv[2];
    const contents = await readFile(filePath, 'utf8');
    console.log(contents);
  } catch (error) {
    console.error(`Error:, ${error.message}`);
  }
}

readAny();
