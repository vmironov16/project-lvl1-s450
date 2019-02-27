
import { core, getRandomInt } from '../core';

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


const getRandomMathOperation = () => mathOperators[
  Math.floor(Math.random() * mathOperators.length)
];

const getData = () => {
  const mathOperationData = getRandomMathOperation();
  return {
    a: getRandomInt(minRandomInt, maxRandomInt),
    b: getRandomInt(minRandomInt, maxRandomInt),
    sign: mathOperationData.sign,
    method: mathOperationData.method,
  };
};

const getQuestion = data => `${data.a} ${data.sign} ${data.b}`;

const getRightAnswer = data => data.method(data.a, data.b);

const app = () => {
  core(getData, getQuestion, getRightAnswer);
};

export default app;
