import { useEffect, useCallback } from 'react';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { BiHelpCircle } from 'react-icons/bi';
import { IoStatsChart } from 'react-icons/io5';
import { BsPeopleFill } from 'react-icons/bs';
import { useSelector } from './store';
import { GameRow } from './components/GameRow';
import { GameKeyboard } from './components/GameKeyboard';
import { sendAttempt, setCurrentWord, backCurrentWord } from './slices/gameSlice';
import {
  switchIsUserStatOpen,
  switchIsTutorialOpen,
  switchIsGameInfoOpen,
} from './slices/windowSlice';
import UserStat from './components/UserStat';
import Tutorial from './components/Tutorial';
import GameInfo from './components/GameInfo';

import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  const dispatch = useDispatch();
  const { isUserStatOpen, isTutorialOpen, isGameInfoOpen } = useSelector((state) => state.window);

  const handleUserKeyPress = useCallback((event) => {
    const { key, keyCode } = event;

    if (keyCode >= 65 && keyCode <= 90) {
      dispatch(setCurrentWord(key));
    } else if (keyCode === 13) {
      dispatch(sendAttempt());
    } else if (keyCode === 8) {
      dispatch(backCurrentWord());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);
    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  return (
    <div className='flex flex-col justify-between h-full'>
      <header className='flex justify-between items-center py-4 mb-3 mx-4'>
        <div className='flex gap-2'>
          <button
            type='button'
            className='border-4 border-slate-900 h-10 w-10 rounded-md flex justify-center items-center'
            onClick={() => dispatch(switchIsTutorialOpen())}
          >
            <BiHelpCircle />
          </button>
          <button
            type='button'
            className='border-4 border-slate-900 h-10 w-10 rounded-md flex justify-center items-center'
            onClick={() => dispatch(switchIsUserStatOpen())}
          >
            <IoStatsChart />
          </button>
        </div>
        <div>
          <h1 className='font-sans font-bold text-4xl'>LETRANDO</h1>
        </div>
        <div className='flex gap-2'>
          <button
            type='button'
            className='border-4 border-slate-900 h-10 w-10 rounded-md flex justify-center items-center'
            onClick={() => dispatch(switchIsUserStatOpen())}
          >
            <IoStatsChart />
          </button>
          <button
            type='button'
            className='border-4 border-slate-900 h-10 w-10 rounded-md flex justify-center items-center'
            onClick={() => dispatch(switchIsGameInfoOpen())}
          >
            <BsPeopleFill />
          </button>
        </div>
      </header>
      <div className='flex flex-col gap-2 justify-center items-center mt-1 top-0 left-0'>
        <GameRow id='0' />
        <GameRow id='1' />
        <GameRow id='2' />
        <GameRow id='3' />
        <GameRow id='4' />
        <GameRow id='5' />
      </div>
      {isUserStatOpen || isTutorialOpen || isGameInfoOpen ? (
        <div className='fixed z-50 w-96 bg-slate-900 rounded-md p-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          {isUserStatOpen ? <UserStat /> : null}
          {isTutorialOpen ? <Tutorial /> : null}
          {isGameInfoOpen ? <GameInfo /> : null}
        </div>
      ) : null}
      <ToastContainer theme='dark' />
      <GameKeyboard handleUserKeyPress={handleUserKeyPress} />
    </div>
  );
}

export default App;
