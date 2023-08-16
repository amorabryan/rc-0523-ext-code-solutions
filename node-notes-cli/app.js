import { writeFile, readFile } from 'node:fs/promises';

async function crudData() {
  try {
    const [, , action, arg1, arg2] = process.argv;
    switch (action) {
      case 'read':
        await readNotes();
        break;
      case 'add':
        await addNote(arg1);
        break;
      case 'update':
        await updateNote(arg1, arg2);
        break;
      case 'delete':
        await deleteNote(arg1);
        break;
      default:
        throw new Error(
          `'${action}' is not a proper action, please try again!`
        );
    }
  } catch (error) {
    console.error('Please try a new phrase again, an error occured:', error);
    process.exit(1);
  }
}

async function generateData() {
  const journal = await readFile('data.json', 'utf8');
  return JSON.parse(journal);
}

async function updateData(data) {
  const newData = JSON.stringify(data, null, 2);
  await writeFile('data.json', newData, 'utf8');
}

async function readNotes() {
  const data = await generateData();
  for (const entryId in data.notes) {
    console.log(`${entryId}: ${data.notes[entryId]}`);
  }
}

async function addNote(note) {
  try {
    if (note) {
      const data = await generateData();
      const entryId = data.nextId;
      data.notes[entryId] = note;
      data.nextId++;
      await updateData(data);
    } else {
      throw new Error(
        'please record your entry, do not leave the field blank.'
      );
    }
  } catch (error) {
    console.error('An error occured while adding the entry:', error);
  }
}

async function deleteNote(entryId) {
  try {
    const data = await generateData();
    if (data.notes[entryId]) {
      delete data.notes[entryId];
      await updateData(data);
    } else {
      throw new Error(`entry ID ${entryId} does not exist.`);
    }
  } catch (error) {
    console.error('An error occured while deleting the entry:', error);
  }
}

async function updateNote(entryId, updatedNote) {
  try {
    const data = await generateData();
    if (data.notes[entryId]) {
      data.notes[entryId] = updatedNote;
      await updateData(data);
    } else {
      throw new Error(`entry ID ${entryId} does not exist.`);
    }
  } catch (error) {
    console.error(`Please enter a new id, ${entryId} does not exist:`, error);
  }
}

crudData();
