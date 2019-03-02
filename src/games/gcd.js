import core from '../core';
import getRandomInt from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const minRandomInt = 1;

const maxRandomInt = 100;

const findGCD = (a, b) => (a !== 0 ? findGCD(b % a, a) : b);

const getGameData = () => {
  const a = getRandomInt(minRandomInt, maxRandomInt);
  const b = getRandomInt(minRandomInt, maxRandomInt);
  return {
    question: `${a} ${b}`,
    answer: findGCD(a, b),
  };
};

export default () => core(description, getGameData);
