import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
  // Wait for user's response.
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

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const core = (getDataFunc, getQuestionFunc, getRightAnswerFunc) => {
  const userName = greeting();
  const countRightAnswersForEnd = 3;

  const iter = (name, getData, getQuestion, getRightAnswer, counter) => {
    if (counter === countRightAnswersForEnd) {
      console.log(`Congratulations, ${name}!`);
    } else {
      const data = getData();
      const question = getQuestion(data);
      showQuestion(question);
      const answer = getAnswer();
      const rightAnswer = getRightAnswer(data);
      const result = getResult(answer, rightAnswer);
      showResultMsgForUser(result, answer, rightAnswer, name);
      iter(name, getData, getQuestion, getRightAnswer, (result === true) ? counter + 1 : counter);
    }
  };

  iter(userName, getDataFunc, getQuestionFunc, getRightAnswerFunc, 0);
};

export { core, getRandomInt };
