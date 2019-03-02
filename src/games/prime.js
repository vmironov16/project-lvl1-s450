import core from '../core';
import getRandomInt from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minRandomInt = 1;
const maxRandomInt = 100;

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getRightAnswer = num => (isPrime(num) ? 'yes' : 'no');

const getGameData = () => {
  const numQuestion = getRandomInt(minRandomInt, maxRandomInt);
  return {
    question: numQuestion,
    answer: getRightAnswer(numQuestion),
  };
};

export default () => core(description, getGameData);
