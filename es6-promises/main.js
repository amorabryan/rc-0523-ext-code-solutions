import takeAChance from './take-a-chance.js';

takeAChance('Bryan')
  .then((success) => {
    console.log(success);
  })
  .catch((error) => {
    console.error(error.message);
  });
