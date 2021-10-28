import { createSlice } from '@reduxjs/toolkit';

export const reproductionStateSlice = createSlice({
name: 'reproduction',
    initialState: {
        isPaused: true
    },
    reducers: {
        setReproductionStateActual: (state, action) => {
        state.isPaused = action.payload;
        }
    },
});

export const { setReproductionStateActual } = reproductionStateSlice.actions;

export default reproductionStateSlice.reducer;

export const updateReproductionState = (isPaused) => (dispatch) => {
    dispatch(setReproductionStateActual(isPaused));
};