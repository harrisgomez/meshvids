import {
    UPLOAD_VIDEO,
    UPLOAD_PENDING,
    UPLOAD_SUCCESS,
    UPLOAD_FAIL
} from './types';

export const uploadVideo = () => ({
    type: UPLOAD_VIDEO,
});
export const uploadPending = () => ({
    type: UPLOAD_PENDING,
});
export const uploadSuccess = () => ({
    type: UPLOAD_SUCCESS,
});
export const uploadFail = () => ({
    type: UPLOAD_FAIL,
});