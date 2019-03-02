import core from '../core';
import getRandomInt from '../utils';

const description = 'What number is missing in the progression?';

const length = 10;

const minRandomStep = 1;
const maxRandomStep = 10;

const minRandomFirstEl = 1;
const maxRandomFirstEl = 100;

const firstIndexEl = 0;
const lastIndexEl = length - 1;

const getArrProgression = (firstEl, step, progressionlength) => {
  const arr = [];
  for (let i = 0; i < progressionlength - 1; i += 1) {
    arr.push(firstEl + step * i);
  }
  return arr;
};

const getArrProgressionForQuestion = (arrProgression, hideIndexEl) => arrProgression.map((el, i) => ((i === hideIndexEl) ? '...' : el));

const getGameData = () => {
  const firstEl = getRandomInt(minRandomFirstEl, maxRandomFirstEl);
  const step = getRandomInt(minRandomStep, maxRandomStep);
  const hiddenElementIndex = getRandomInt(firstIndexEl, lastIndexEl);

  const progression = getArrProgression(firstEl, step, length);
  const answer = progression[hiddenElementIndex];
  const question = getArrProgressionForQuestion(progression, hiddenElementIndex).join(',');

  return {
    question,
    answer,
  };
};

export default () => core(description, getGameData);
