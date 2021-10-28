import { createSlice } from '@reduxjs/toolkit';
import { updateReproductionState } from '../reproductionState';

export const videoActualSlice = createSlice({
    name: 'video_actual',
    initialState: {
        video: {
            index: 0,
            description: null,
            sources: null,
            subtitle: null,
            thumb: null,
            title: null
        },
    },
    reducers: {
        setVideoActual: (state, action) => {
        state.video = action.payload;
        }
    },
});

export const { setVideoActual } = videoActualSlice.actions;

export default videoActualSlice.reducer;

export const updateVideoActual = (video) => (dispatch) => {
    dispatch(setVideoActual(video));
    dispatch(updateReproductionState(false));
};