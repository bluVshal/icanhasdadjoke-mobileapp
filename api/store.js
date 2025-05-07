import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from './slices/counterSlice';
import jokeSlice from './slices/jokesSlice';
import colorSlice from "./slices/colorSlice";

const store = configureStore({
    reducer: {
    /*    counter: counterSlice,
        joke: jokeSlice,*/
        color: colorSlice,
    },
});

export default store;