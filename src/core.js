import readlineSync from 'readline-sync';

const showResultMsgForUser = (result, answer, rightAnswer, name) => {
  if (result === true) {
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
    if (counter === null) {
      return;
    }
    if (counter === countRightAnswersForEnd) {
      console.log(`Congratulations, ${userName}!`);
    } else {
      const gameData = getDataGame();
      const questionText = gameData.question;
      const rightAnswer = gameData.answer;
      console.log(`Question:${questionText}`);
      const answer = readlineSync.question('Your answer:').toLowerCase();
      const result = (String(answer) === String(rightAnswer));
      showResultMsgForUser(result, answer, rightAnswer, userName);
      iter(getDataGame, (result) ? counter + 1 : null);
    }
  };

  iter(dataGameFunc, 0);
};

export default core;
