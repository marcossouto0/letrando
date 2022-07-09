import React from 'react';
import { useDispatch } from 'react-redux';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useSelector } from '../store';
import { switchIsUserStatOpen } from '../slices/windowSlice';

function UserStat() {
  const { losses, wins, totalWins, streak, bestStreak, points } = useSelector(
    (state) => state.user,
  );
  const dispatch = useDispatch();
  function handleCloseButton() {
    dispatch(switchIsUserStatOpen());
  }
  function getWinPercentage(victories: number, defeats: number) {
    const total = victories + defeats;
    if (total === 0) {
      return 0;
    }
    if (victories === total) {
      return 100;
    }
    const percentage = ((victories * defeats) / total) * 100;
    return Math.round(percentage);
  }

  return (
    <>
      <header className='flex justify-between items-center mb-3'>
        <h3 className='text-lg bold'>Dados de Jogo</h3>
        <button type='button' className='' onClick={handleCloseButton}>
          <AiFillCloseCircle />
        </button>
      </header>
      <div className='flex justify-between m-5'>
        <div className='flex flex-col justify-center items-center'>
          <h3 className='text-4xl'>{losses + totalWins}</h3>
          <p className='text-sm bold text-slate-400'>jogos</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h3 className='text-4xl'> {getWinPercentage(totalWins, losses)}%</h3>
          <p className='text-sm bold text-slate-400'>de vitórias</p>
        </div>
        <div className='flex flex-col justify-center items-center mt-5'>
          <h3 className='text-4xl'>{streak}</h3>
          <p className='text-sm bold text-slate-400'>
            sequencia de
            <br />
            Vitorias atual
          </p>
        </div>
        <div className='flex flex-col justify-center items-center mt-5'>
          <h3 className='text-4xl'>{bestStreak}</h3>
          <p className='text-sm bold text-slate-400'>
            melhor
            <br />
            sequencia
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-5 justify-center items-center m-5'>
        <h3 className='text-xl'>Vitorias em cada linha</h3>
        <div className='flex justify-between gap-5'>
          <div className='flex w-20 h-20 bg-slate-800 flex-col justify-center items-center rounded-md'>
            <p className='text-xl'>{wins.row0}</p>
            <p className='text-sm'>1</p>
          </div>
          <div className='flex w-20 h-20 bg-slate-800 flex-col justify-center items-center rounded-md'>
            <p className='text-xl'>{wins.row1}</p>
            <p className='text-sm'>2</p>
          </div>
          <div className='flex w-20 h-20 bg-slate-800 flex-col justify-center items-center rounded-md'>
            <p className='text-xl'>{wins.row2}</p>
            <p className='text-sm'>3</p>
          </div>
        </div>
        <div className='flex justify-between gap-5'>
          <div className='flex w-20 h-20 bg-slate-800 flex-col justify-center items-center rounded-md'>
            <p className='text-xl'>{wins.row3}</p>
            <p className='text-sm'>4</p>
          </div>
          <div className='flex w-20 h-20 bg-slate-800 flex-col justify-center items-center rounded-md'>
            <p className='text-xl'>{wins.row4}</p>
            <p className='text-sm'>5</p>
          </div>
          <div className='flex w-20 h-20 bg-slate-800 flex-col justify-center items-center rounded-md'>
            <p className='text-xl'>{wins.row5}</p>
            <p className='text-sm'>6</p>
          </div>
        </div>
        <div className='flex w-20 h-20 bg-slate-800 flex-col justify-center items-center rounded-md'>
          <p className='text-xl'>{losses}</p>
          <p className='text-sm'>💀</p>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <p>Pontuação: {points}</p>
      </div>
    </>
  );
}

export default UserStat;
