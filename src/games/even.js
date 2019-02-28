import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Answer "yes" if number even otherwise answer "no".`);
  // Wait for user's response.
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello !!!, ${userName}!`);
  return userName;
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEven = num => ((num % 2 === 0));

const getRightAnswer = num => (isEven(num) ? 'yes' : 'no');

const getResult = (answer, rightAnswer) => ((answer === rightAnswer));

const showResultMsgForUser = (result, answer, rightAnswer, name) => {
  if (result === true) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
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
    if (counter === false){
      return false;
    }
    if (counter === countRightAnswersForEnd) {
      console.log(`Congratulations, ${name}!`);
    } else {
      const question = getRandomInt(0, 101);
      showQuestion(question);
      const answer = getAnswer();
      const rightAnswer = getRightAnswer(question);
      const result = getResult(answer, rightAnswer);
      showResultMsgForUser(result, answer, rightAnswer, name);
      iter(name, (result) ? counter + 1 : false);
    }
  };

  iter(userName, 0);
};

export default app;
