import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
  // Wait for user's response.
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello !!!, ${userName}!`);
  return userName;
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;


const generateQuestionForm = (num) => {
  const q = `Question:${num}\nYour answer:`;
  const answer = readlineSync.question(q);
  return answer;
};


const getRightAnswer = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const questionMsg = (answer, rightAnswer, userName) => {
  if (answer === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
  return false;
};


const app = () => {
  const userName = greeting();

  const iter = (name, acc) => {
    if (acc === 3) {
      console.log(`Congratulations, ${name}!`);
      return false;
    }

    const num = getRandomInt(0, 101);
    const answer = generateQuestionForm(num);
    const rightAnswer = getRightAnswer(num);
    const result = questionMsg(answer, rightAnswer, name);
    return iter(name, (result === true) ? acc + 1 : acc);
  };

  return iter(userName, 0);
};

export default app;
