import core from '../core';
import getRandomInt from '../utils';

const description = 'What is the result of the expression?';
const minRandomInt = 0;
const maxRandomInt = 11;
const mathOperators = [
  {
    sign: '+',
    method(a, b) { return a + b; },
  },
  {
    sign: '-',
    method(a, b) { return a - b; },
  },
  {
    sign: '*',
    method(a, b) { return a * b; },
  },
];

const getRandomMathOperation = () => {
  const minIndexMathOperator = 0;
  const maxIndexMathOperator = mathOperators.length;
  return mathOperators[
    getRandomInt(minIndexMathOperator, maxIndexMathOperator)
  ];
};

const getGameData = () => {
  const mathOperationData = getRandomMathOperation();
  const a = getRandomInt(minRandomInt, maxRandomInt);
  const b = getRandomInt(minRandomInt, maxRandomInt);
  return {
    question: `${a} ${mathOperationData.sign} ${b}`,
    answer: mathOperationData.method(a, b),
  };
};

export default () => core(description, getGameData);
