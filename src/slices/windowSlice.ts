import { createSlice } from '@reduxjs/toolkit';

interface WindowState {
  isUserStatOpen: boolean;
  isTutorialOpen: boolean;
  isGameInfoOpen: boolean;
}

const initialState: WindowState = {
  isUserStatOpen: false,
  isTutorialOpen: true,
  isGameInfoOpen: false,
};

const windowSlice = createSlice({
  name: 'window',
  initialState,
  reducers: {
    switchIsUserStatOpen: (state: WindowState) => {
      state.isTutorialOpen = false;
      state.isGameInfoOpen = false;
      state.isUserStatOpen = !state.isUserStatOpen;
    },
    switchIsTutorialOpen: (state: WindowState) => {
      state.isUserStatOpen = false;
      state.isGameInfoOpen = false;
      state.isTutorialOpen = !state.isTutorialOpen;
    },
    switchIsGameInfoOpen: (state: WindowState) => {
      state.isUserStatOpen = false;
      state.isTutorialOpen = false;
      state.isGameInfoOpen = !state.isGameInfoOpen;
    },
  },
});

export const { switchIsTutorialOpen, switchIsUserStatOpen, switchIsGameInfoOpen } =
  windowSlice.actions;

export default windowSlice.reducer;
