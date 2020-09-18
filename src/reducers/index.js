import { combineReducers } from 'redux';
import videoReducer from './video-reducer';

export default combineReducers({
    video: videoReducer
});