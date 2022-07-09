import React from 'react';
import { useDispatch } from 'react-redux';
import { AiFillCloseCircle } from 'react-icons/ai';
import { switchIsGameInfoOpen } from '../slices/windowSlice';

function UserStat() {
  const dispatch = useDispatch();
  function handleCloseButton() {
    dispatch(switchIsGameInfoOpen());
  }

  return (
    <div>
      <header className='flex justify-between items-center mb-3'>
        <h3 className='text-lg bold'>Informações</h3>
        <button type='button' className='' onClick={handleCloseButton}>
          <AiFillCloseCircle />
        </button>
      </header>
      <main>
        <p className='mb-3'>
          Este jogo foi baseado no{' '}
          <a className='underline' href='https://term.ooo'>
            Termoo
          </a>
        </p>
        <p className='mb-2'>
          Este jogo é open-source e o código dele está disponível{' '}
          <a className='underline' href='https://github.com/marcossouto0/letrando'>
            neste repositório do Github
          </a>
        </p>
        <p className='mb-1'>
          Caso você encontre um bug ou tenha uma sugestâo mande uma issue no repositorio do Github
          ou me mande mensagem no Discord (Socramm#2020)
        </p>
        <p>Ou caso queira contribuir com o código mande um pull request no github</p>
      </main>
    </div>
  );
}

export default UserStat;
