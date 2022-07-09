import { useSelector } from '../store';
import { tiraAcento } from '../words/tiraAcento';

interface GameAreaProps {
  row: string;
  letterID: string;
}

export function GameArea(props: GameAreaProps) {
  const { row, letterID } = props;
  const { currentRow, attempts, currentWord, answer } = useSelector((state) => state.game);

  const answerList = tiraAcento(window.atob(answer)).split('');
  const id = `${row}_${letterID}`;

  let letter!: string;
  let styles: string;

  // eslint-disable-next-line @typescript-eslint/no-shadow
  function getAllIndexOf(array: string[], letter: string) {
    return array.reduce(
      (acc: number[], cur: string, index: number) => (cur === letter ? [...acc, index] : acc),
      [],
    );
  }

  if (currentRow === +row) {
    letter = currentWord[+letterID] || '';
    styles =
      'border-4 border-slate-900 rounded-md h-16 w-16 flex justify-center items-center text-center select-none font-bold';
  } else if (attempts[+row]) {
    const word = attempts[+row];
    letter = word[+letterID];

    // eslint-disable-next-line no-inner-declarations
    function isValid() {
      const answerIndexList = getAllIndexOf(answerList, letter);
      const wordIndexList = getAllIndexOf(word, letter);

      if (answerIndexList.length >= 1 && wordIndexList.length >= 1) {
        if (wordIndexList.length <= answerIndexList.length) {
          return true;
        }
        // eslint-disable-next-line default-case
        switch (wordIndexList.length - answerIndexList.length) {
          case 1:
            if (wordIndexList[wordIndexList.length - 1] !== +letterID) {
              return true;
            }
            break;
          case 2:
            if (
              wordIndexList[wordIndexList.length - 1] !== +letterID &&
              wordIndexList[wordIndexList.length - 2] !== +letterID
            ) {
              return true;
            }
        }
      }
      return false;
    }

    if (isValid()) {
      if (word[+letterID] === answerList[+letterID]) {
        styles =
          'border-4 border-slate-800 bg-green-800 rounded-md h-16 w-16 flex justify-center items-center text-center select-none font-bold';
      } else {
        styles =
          'border-4 border-slate-800 bg-[#D2AB00] rounded-md h-16 w-16 flex justify-center items-center text-center select-none font-bold';
      }
    } else {
      styles =
        'border-4 border-slate-800 bg-gray-800 rounded-md h-16 w-16 flex justify-center items-center text-center select-none font-bold';
    }
  } else {
    styles =
      'border-4 border-slate-800 rounded-md h-16 w-16 flex justify-center items-center text-center select-none font-bold';
  }

  return (
    <div className={styles} id={id}>
      {letter}
    </div>
  );
}
