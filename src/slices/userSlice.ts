import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  wins: {
    row0: number;
    row1: number;
    row2: number;
    row3: number;
    row4: number;
    row5: number;
  };
  totalWins: number;
  streak: number;
  bestStreak: number;
  losses: number;
  points: number;
}

const initialState: UserState = {
  wins: {
    row0: 0,
    row1: 0,
    row2: 0,
    row3: 0,
    row4: 0,
    row5: 0,
  },
  totalWins: 0,
  streak: 0,
  bestStreak: 0,
  losses: 0,
  points: 0,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addWin: (state: UserState, action: { payload: number; type: string }) => {
      switch (action.payload) {
        case 0:
          state.points += 50;
          state.wins.row0++;
          state.totalWins++;
          state.streak++;
          break;
        case 1:
          state.points += 25;
          state.wins.row1++;
          state.totalWins++;
          state.streak++;
          break;
        case 2:
          state.points += 15;
          state.wins.row2++;
          state.totalWins++;
          state.streak++;
          break;
        case 3:
          state.points += 10;
          state.wins.row3++;
          state.totalWins++;
          state.streak++;
          break;
        case 4:
          state.points += 5;
          state.wins.row4++;
          state.totalWins++;
          state.streak++;
          break;
        case 5:
          state.points += 0;
          state.wins.row5++;
          state.totalWins++;
          state.streak++;
          break;

        default:
          break;
      }
    },
    addLoss: (state: UserState) => {
      state.losses++;
      state.points -= 10;
      if (state.streak > state.bestStreak) {
        state.bestStreak = state.streak;
      }
      state.streak = 0;
    },
  },
});

export const { addWin, addLoss } = userSlice.actions;

export default userSlice.reducer;
