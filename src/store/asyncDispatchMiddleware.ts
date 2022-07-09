// This middleware will just add the property "async dispatch" to all actions
export const asyncDispatchMiddleware = (store: unknown) => (next: unknown) => (action: unknown) => {
  let syncActivityFinished = false;
  let actionQueue: [] = [];

  function flushQueue() {
    actionQueue.forEach((a) => store.dispatch(a)); // flush queue
    actionQueue = [];
  }

  function asyncDispatch(asyncAction: () => { payload: any; type: string }) {
    actionQueue = actionQueue.concat([asyncAction]);

    if (syncActivityFinished) {
      flushQueue();
    }
  }

  const actionWithAsyncDispatch = { ...action, asyncDispatch };

  const res = next(actionWithAsyncDispatch);

  syncActivityFinished = true;
  flushQueue();

  return res;
};
