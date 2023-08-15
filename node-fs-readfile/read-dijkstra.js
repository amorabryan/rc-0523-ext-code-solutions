import { readFile } from 'node:fs/promises';

async function readDijkstra() {
  try {
    const contents = await readFile('dijkstra.txt', 'utf8');
    console.log(contents);
  } catch (error) {
    console.error(`Error:, ${error.message}`);
  }
}

readDijkstra();
