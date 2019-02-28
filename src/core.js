import readlineSync from 'readline-sync';

const showGreeting = () => {
  console.log('Welcome to the Brain Games!');
};

const showRules = (rulesText) => {
  console.log(rulesText);
};

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello , ${userName}!`);
  return userName;
};

const getResult = (answer, rightAnswer) => ((parseInt(answer, 10) === parseInt(rightAnswer, 10)));

const showResultMsgForUser = (result, answer, rightAnswer, name) => {
  if (result === true) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
  }
};

const showQuestion = (num) => {
  console.log(`Question:${num}`);
};

const getAnswer = () => {
  const answer = readlineSync.question('Your answer:');
  return answer.toLowerCase();
};

const core = (dataGameFunc) => {
  const countRightAnswersForEnd = 3;
  showGreeting();
  showRules(dataGameFunc().rules);
  const userName = getUserName();

  const iter = (name, getDataGame, counter) => {
    if (counter === countRightAnswersForEnd) {
      console.log(`Congratulations, ${name}!`);
    } else {
      const gameData = getDataGame();
      const questionText = gameData.question;

      const rightAnswer = gameData.answer;
      showQuestion(questionText);
      const answer = getAnswer();
      const result = getResult(answer, rightAnswer);
      showResultMsgForUser(result, answer, rightAnswer, name);
      if (result) {
        iter(name, getDataGame, (result) ? counter + 1 : null);
      }
    }
  };

  iter(userName, dataGameFunc, 0);
};

export default core;
