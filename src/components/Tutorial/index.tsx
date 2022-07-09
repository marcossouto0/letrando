import React from 'react';
import { useDispatch } from 'react-redux';
import { AiFillCloseCircle } from 'react-icons/ai';
import { switchIsTutorialOpen } from '../../slices/windowSlice';
import GameAreaCopy from './GameAreaCopy';

function Tutorial() {
  const dispatch = useDispatch();
  function handleCloseButton() {
    dispatch(switchIsTutorialOpen());
  }

  return (
    <>
      <header className='flex justify-between items-center mb-3'>
        <h3 className='text-lg bold'>Tutorial</h3>
        <button type='button' className='' onClick={handleCloseButton}>
          <AiFillCloseCircle />
        </button>
      </header>
      <p>
        Descubra a palavra certa em 6 tentativas. Depois de cada tentativa, as peças mostram o quão
        perto você está da solução
      </p>
      <div className='flex gap-2 my-3 mx-1'>
        <GameAreaCopy letter='R' bgcolor='green' />
        <GameAreaCopy letter='E' bgcolor='gray' />
        <GameAreaCopy letter='I' bgcolor='green' />
        <GameAreaCopy letter='N' bgcolor='gray' />
        <GameAreaCopy letter='O' bgcolor='yellow' />
      </div>
      <div>
        <p className='mb-2'>
          Quando a letra está com o fundo verde significa que esta letra existe na palavra correta e
          está na mesma posição que está nessa palavra.
        </p>
        <p className='mb-2'>
          Quando está com fundo amarelo significa que ela existe na palavra correta mas esta numa
          posição diferente.
        </p>
        <p className='mb-2'>
          E quando esta com o fundo cinza significa que esta letra não existe na palavra correta.
        </p>
        <p className='mb-2'>
          Acentos de palavras são retiradas e são consideradas como letras sem acentos
        </p>
        <p className='mb-2'>Palavras podem possuir letras repetidas</p>
        <p>A palavra certa muda todo dia</p>
      </div>
    </>
  );
}

export default Tutorial;
