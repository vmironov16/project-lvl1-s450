import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
  // Wait for user's response.
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello !!!, ${userName}!`);
  return userName;
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getRightAnswer = num => (isEven(num) ? 'yes' : 'no');

const getResult = (answer, rightAnswer) => ((answer === rightAnswer));

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

const app = () => {
  const userName = greeting();
  const countRightAnswersForEnd = 3;

  const iter = (name, counter) => {
    if (counter === countRightAnswersForEnd) {
      console.log(`Congratulations, ${name}!`);
    } else {
      const num = getRandomInt(0, 101);
      showQuestion(num);
      const answer = getAnswer();
      const rightAnswer = getRightAnswer(num);
      const result = getResult(answer, rightAnswer);
      showResultMsgForUser(result, answer, rightAnswer, name);
      iter(name, (result === true) ? counter + 1 : counter);
    }
  };

  iter(userName, 0);
};

export default app;
