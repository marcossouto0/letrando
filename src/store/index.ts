import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';
import { rootReducer } from '../slices';
import { onRehydrationMiddleware } from './onRehydrationMiddleware';
import { asyncDispatchMiddleware } from './asyncDispatchMiddleware';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk, onRehydrationMiddleware, asyncDispatchMiddleware],
});

export const persistor = persistStore(store);

type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
