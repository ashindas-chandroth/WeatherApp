// store.ts (or wherever your store setup is located)
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './index'; // Your combined reducers

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
