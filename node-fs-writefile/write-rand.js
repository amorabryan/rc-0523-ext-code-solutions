import { writeFile } from 'node:fs/promises';

async function writeRand() {
  try {
    const randomNumber = String(Math.random());
    await writeFile('random.txt', `${randomNumber}\n`);
  } catch (error) {
    console.log(`Error:, ${error}`);
  }
}

writeRand();
