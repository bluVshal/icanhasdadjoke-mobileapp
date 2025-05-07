import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchJoke = createAsyncThunk('joke/fetch', async() => {
    const response = await fetch('https://icanhazdadjoke.com/',{
        headers: {Accept: 'application/json'}
    })
    const data = await response.json();
    return data.joke
});

const jokeSlice = createSlice({
    name: "joke",
    initialState: {
        value: "",
        status: "idle",
    },
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(fetchJoke.pending, state => {
            state.status = 'loading';
        })
        .addCase(fetchJoke.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.value = action.payload;
        })
        .addCase(fetchJoke.rejected, state => {
            state.status = 'failed';
            state.value = 'Failed to fetch joke';
        })
    }
});

export default jokeSlice.reducer;