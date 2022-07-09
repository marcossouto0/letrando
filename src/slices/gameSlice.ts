import { toast } from 'react-toastify';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { solution } from '../words/wordOfTheDay';
import wordList, { tiraAcento } from '../words/tiraAcento';
import { addWin, addLoss } from './userSlice';
import { switchIsUserStatOpen } from './windowSlice';

interface GameState {
  answer: string;
  currentWord: Array<string>;
  attempts: Array<Array<string>>;
  currentRow: number;
  guessed: boolean;
}

const initialState: GameState = {
  answer: '',
  currentWord: [],
  attempts: [],
  currentRow: 0,
  guessed: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    sendAttempt: (
      state: GameState,
      action: {
        type: string;
        payload: undefined;
      },
    ) => {
      const joinCurrentWord = state.currentWord.join('');

      if (!state.guessed && state.currentWord.length === 5) {
        if (state.currentWord.length < 5) {
          toast.error('A palavra deve ter mais de 5 letras');
          return;
        }

        if (!wordList.includes(joinCurrentWord.toLowerCase())) {
          toast.error('Palavra Inválida!');
          state.currentWord = [];
          return;
        }

        state.attempts.push(state.currentWord);

        if (joinCurrentWord === tiraAcento(window.atob(state.answer))) {
          state.guessed = true;
          action.asyncDispatch(addWin(state.currentRow));
          action.asyncDispatch(switchIsUserStatOpen());
        } else if (state.currentRow === 5) {
          state.guessed = true;
          action.asyncDispatch(addLoss());
          action.asyncDispatch(switchIsUserStatOpen());
          toast(`A palavra era ${window.atob(state.answer)}`);
        }

        state.currentRow++;
        state.currentWord = [];
      }
    },

    setCurrentWord: (state: GameState, action: PayloadAction) => {
      if (state.currentWord.length < 5) {
        state.currentWord.push(action.payload.toUpperCase());
      }
    },

    backCurrentWord: (state: GameState) => {
      state.currentWord.pop();
    },

    setAnswer: (state: GameState) => {
      if (window.atob(state.answer) !== solution) {
        state.answer = window.btoa(solution);
        state.currentWord = [];
        state.attempts = [];
        state.currentRow = 0;
        state.guessed = false;
      }
    },
  },
});

export const { sendAttempt, setCurrentWord, backCurrentWord, setAnswer } = gameSlice.actions;

export default gameSlice.reducer;
