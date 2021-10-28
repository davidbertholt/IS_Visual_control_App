import { createSlice } from '@reduxjs/toolkit';
// axios
import axios from 'axios';
import { updateVideoActual } from '../videoActual';

export const videoSlice = createSlice({
    name: 'videos',
    initialState: {
        list: [],
    },
    reducers: {
        setVideoList: (state, action) => {
        state.list = action.payload;
        }
    },
});

export const { setVideoList } = videoSlice.actions;

export default videoSlice.reducer;

export const fetchAllVideos = () => (dispatch) => {
    const url_get = 'https://api.jsonbin.io/b/5ef409df2406353b2e0c4068';
    const catPosition = 0;
    const initialPosition = 0;
    axios
        .get(url_get)
            .then((response) => {
                let videos = response.data.categories[catPosition].videos;
                dispatch(setVideoList(videos));
                dispatch(updateVideoActual({...videos[initialPosition], initialPosition}))
            })
            .catch((error) => console.log(error));
};