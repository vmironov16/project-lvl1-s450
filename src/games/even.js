import core from '../core';
import getRandomInt from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const minRandomInt = 1;

const maxRandomInt = 101;

const isEven = num => ((num % 2 === 0));

const getRightAnswer = num => (isEven(num) ? 'yes' : 'no');

const getGameData = () => {
  const numQuestion = getRandomInt(minRandomInt, maxRandomInt);
  return {
    description,
    question: numQuestion,
    answer: getRightAnswer(numQuestion),
  };
};

export default () => core(getGameData);
