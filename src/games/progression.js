import core from '../core';
import getRandomInt from '../utils';

const description = 'What number is missing in the progression?';

const lengthProgression = 10;

const minRandomStepProgression = 1;
const maxRandomStepProgression = 10;

const minRandomFirstElProgression = 1;
const maxRandomFirstElProgression = 100;

const firstIndexElProgression = 0;
const lastIndexElProgression = lengthProgression;

const arrToString = arr => arr.join(',');

const getElArrByIndex = (arr, indexEl) => arr[indexEl];

const getArrProgression = (firstEl, step, length) => {
  const arr = [firstEl];
  for (let i = 0; i < length - 1; i += 1) {
    arr.push(arr[i] + step);
  }
  return arr;
};

const getArrProgressionForQuestion = (progression, hideIndexEl) => progression.map((el, i) => ((i === hideIndexEl) ? '...' : el));

const getGameData = () => {
  const firstElProgression = getRandomInt(minRandomFirstElProgression, maxRandomFirstElProgression);
  const stepProgression = getRandomInt(minRandomStepProgression, maxRandomStepProgression);
  const indexElProgressionHide = getRandomInt(firstIndexElProgression, lastIndexElProgression);

  const progression = getArrProgression(firstElProgression, stepProgression, lengthProgression);
  const progressionQuestion = getArrProgressionForQuestion(progression, indexElProgressionHide);

  const answer = getElArrByIndex(progression, indexElProgressionHide);
  const question = arrToString(progressionQuestion);

  return {
    description,
    question,
    answer,
  };
};

export default () => core(getGameData);
