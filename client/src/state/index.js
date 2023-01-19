import { createSlice } from '@reduxjs/toolkit';

const initalState = {
	mode: 'dark',
};

export const globalSlice = createSlice({
	name: 'global',
	initialState: initalState,
	reducers: {
		setMode: (state) => {
			state.mode = state.mode === 'light' ? 'dark' : 'light';
		},
	},
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
