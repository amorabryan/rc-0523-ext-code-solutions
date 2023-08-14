import takeAChance from './take-a-chance.js';

// takeAChance('Bryan')
//   .then((success) => {
//     console.log(success);
//   })
//   .catch((error) => {
//     console.error(error.message);
//   });

async function fiftyChance() {
  try {
    const message = await takeAChance('Bryan');
    console.log(message);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

fiftyChance();
