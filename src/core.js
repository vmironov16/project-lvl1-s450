import readlineSync from 'readline-sync';

const showResultMsgForUser = (result, answer, rightAnswer, name) => {
  if (result) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  }
};

const core = (description, dataGameFunc) => {
  const countRightAnswersForEnd = 3;
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello , ${userName}!`);

  const iter = (getDataGame, counter) => {
    if (counter === countRightAnswersForEnd) {
      console.log(`Congratulations, ${userName}!`);
    } else {
      const { question, answer: rightAnswer } = getDataGame();
      console.log(`Question:${question}`);
      const answer = readlineSync.question('Your answer:').toLowerCase();
      const result = (answer === rightAnswer);
      showResultMsgForUser(result, answer, rightAnswer, userName);
      if (result) {
        iter(getDataGame, counter + 1);
      }
    }
  };

  iter(dataGameFunc, 0);
};

export default core;
