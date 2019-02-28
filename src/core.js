import readlineSync from 'readline-sync';

const showGreeting = () => {
  console.log('Welcome to the Brain Games!');
};

const showGameDescription = (descrText) => {
  console.log(descrText);
};

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello , ${userName}!`);
  return userName;
};

const getResult = (answer, rightAnswer) => (String(answer) === String(rightAnswer));

const showResultMsgForUser = (result, answer, rightAnswer, name) => {
  if (result === true) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  }
};

const showGameQuestion = (num) => {
  console.log(`Question:${num}`);
};

const getAnswer = () => {
  const answer = readlineSync.question('Your answer:');
  return answer.toLowerCase();
};

const core = (dataGameFunc) => {
  const countRightAnswersForEnd = 3;
  showGreeting();
  showGameDescription(dataGameFunc().description);
  const userName = getUserName();

  const iter = (getDataGame, counter) => {
    if (counter === countRightAnswersForEnd) {
      console.log(`Congratulations, ${userName}!`);
    } else {
      const gameData = getDataGame();
      const questionText = gameData.question;
      const rightAnswer = gameData.answer;
      showGameQuestion(questionText);
      const answer = getAnswer();
      const result = getResult(answer, rightAnswer);
      showResultMsgForUser(result, answer, rightAnswer, userName);
      if (result) {
        iter(getDataGame, (result) ? counter + 1 : null);
      }
    }
  };

  iter(dataGameFunc, 0);
};

export default core;
