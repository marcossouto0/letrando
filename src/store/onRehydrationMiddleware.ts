import { setAnswer } from '../slices/gameSlice';

export const onRehydrationMiddleware = (store: unknown) => (next: unknown) => (action: unknown) => {
  // Executa a ação
  next(action);

  // Se a ação executada não foi a persist/REHYDRATE...
  if (action.type !== 'persist/REHYDRATE') {
    // encerra sem fazer mais nada.
    return;
  }

  // Se foi a persist/REHYDRATE, dispatch na ação que busca na API
  store.dispatch(setAnswer());
};
