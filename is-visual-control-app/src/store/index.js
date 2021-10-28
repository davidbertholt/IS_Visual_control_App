import { configureStore } from '@reduxjs/toolkit';
// reducer
import videos from './slices/videos';
import videoActual from './slices/videoActual';
import reproductionState from './slices/reproductionState';

export default configureStore({
    reducer: {
        videos,
        videoActual,
        reproductionState,
    }
});