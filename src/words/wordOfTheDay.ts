import { wordList } from './wordList';

const getWordOfDay = () => {
  // January 1, 2022 Game Epoch
  const epoch = new Date(2022, 0);
  const start = new Date(epoch);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  let index = 0;
  while (start < today) {
    index++;
    start.setDate(start.getDate() + 1);
  }

  const nextDay = new Date(today);
  nextDay.setDate(today.getDate() + 1);

  return {
    solution: wordList[index % wordList.length].toUpperCase(),
    solutionIndex: index,
    tomorrow: nextDay.valueOf(),
  };
};

export const { solution, solutionIndex, tomorrow } = getWordOfDay();
