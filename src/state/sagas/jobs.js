import { call, put } from 'redux-saga/effects';

import { CommonAction } from '../ducks/common';
import { performGetRequest, performPostRequest, performPostRequestWithFile, performPutRequest, performPutRequestWithFile } from '../axiosUtils';
import Urls from '../Urls';
import { JobAction } from '../ducks/jobs';
import { Toast } from '../../utils/variable';

function getParams(params) {
    return Object.entries(Object.assign({}, params)).
        map(([key, value]) => `${key}=${value}`).
        join('&');
}

export function* getJobsData(action) {
    try {
        yield put(CommonAction.startLoading());
        const endUrl = Urls.GET_JOBS_DATA;
        const params = endUrl + '/?' + getParams(action.payload);
        let response = yield call(performGetRequest, params);
        if (response.status) {
            yield put(JobAction.setJobData(response.payload.jobs));
        }
        yield put(CommonAction.stopLoading());
        action.success(response);
    } catch (error) {
        const message = error.response ? error.response && error.response.data && error.response.data.message : "Network Error or Server down, Please try again later."
        const toastData = { type: Toast.FAIL, message: message };
        yield put(CommonAction.showToast(toastData));
        yield put(CommonAction.stopLoading());
        action.failure(error);
    }
}

export function* updateJobStatus(action) {
    try {
        yield put(CommonAction.startLoading());
        let endUrl = Urls.UPDATE_JOB_STATUS;
        let response = yield call(performPostRequest, endUrl, action.payload);
        if (response.status) {
            const toastData = { type: Toast.SUCCESS, message: response.message };
            yield put(CommonAction.showToast(toastData));
        }
        yield put(CommonAction.stopLoading());
        action.success(response);
    } catch (error) {
        const message = error.response ? error.response && error.response.data && error.response.data.message : "Network Error or Server down, Please try again later."
        const toastData = { type: Toast.FAIL, message: message };
        yield put(CommonAction.showToast(toastData));
        yield put(CommonAction.stopLoading());
        action.failure(error);
    }
}

export function* updateJobDetails(action) {
    try {
        yield put(CommonAction.startLoading());
        let endUrl = Urls.UPDATE_JOB_DETAILS + `/${action.jobId}`;
        let response = yield call(performPutRequest, endUrl, action.payload);
        if (response.status) {
            const toastData = { type: Toast.SUCCESS, message: response.message };
            yield put(CommonAction.showToast(toastData));
        }
        yield put(CommonAction.stopLoading());
        action.success(response);
    } catch (error) {
        const message = error.response ? error.response && error.response.data && error.response.data.message : "Network Error or Server down, Please try again later."
        const toastData = { type: Toast.FAIL, message: message };
        yield put(CommonAction.showToast(toastData));
        yield put(CommonAction.stopLoading());
        action.failure(error);
    }
}

export function* updateJobDetailsOfDay(action) {
    try {
        yield put(CommonAction.startLoading());
        let endUrl = Urls.UPDATE_JOB_DETAILS_OF_DAY + `/${action.jobId}`;
        let response = yield call(performPutRequest, endUrl, action.payload);
        if (response.status) {
            const toastData = { type: Toast.SUCCESS, message: response.message };
            yield put(CommonAction.showToast(toastData));
        }
        yield put(CommonAction.stopLoading());
        action.success(response);
    } catch (error) {
        const message = error.response ? error.response && error.response.data && error.response.data.message : "Network Error or Server down, Please try again later."
        const toastData = { type: Toast.FAIL, message: message };
        yield put(CommonAction.showToast(toastData));
        yield put(CommonAction.stopLoading());
        action.failure(error);
    }
}

//Poser
export function* getPoserBookings(action) {
    try {
        yield put(CommonAction.startLoading());
        const endUrl = Urls.GET_POSER_BOOKINGS;
        const params = endUrl + '/?' + getParams(action.payload);
        let response = yield call(performGetRequest, params);
        if (response.status) {
            // yield put(JobAction.setJobData(response.payload.jobs));
        }
        yield put(CommonAction.stopLoading());
        action.success(response);
    } catch (error) {
        const message = error.response ? error.response && error.response.data && error.response.data.message : "Network Error or Server down, Please try again later."
        const toastData = { type: Toast.FAIL, message: message };
        yield put(CommonAction.showToast(toastData));
        yield put(CommonAction.stopLoading());
        action.failure(error);
    }
}


export function* getNearByPhotographer(action) {
    try {
        action.showLoader && (yield put(CommonAction.startLoading()));
        const endUrl = Urls.GET_NEARBY_PHOTOGRAPHER;
        // const params = endUrl + '/?' + getParams(action.payload);
        // let response = yield call(performGetRequest, params);
        let response = yield call(performPostRequest, endUrl, action.payload);
        if (response.status) {
            // yield put(JobAction.setJobData(response.payload.jobs));
        }
        action.showLoader && (yield put(CommonAction.stopLoading()));
        action.success(response);
    } catch (error) {
        const message = error.response ? error.response && error.response.data && error.response.data.message : "Network Error or Server down, Please try again later."
        const toastData = { type: Toast.FAIL, message: message };
        yield put(CommonAction.showToast(toastData));
        yield put(CommonAction.stopLoading());
        action.failure(error);
    }
}

//Poser: 
//report photographer

export function* reportPhotographer(action) {
    try {
        yield put(CommonAction.startLoading());
        let endUrl = Urls.REPORT_PHOTOGRAPHER;
        let response = yield call(performPostRequest, endUrl, action.payload);
        if (response.status) {
            const toastData = { type: Toast.SUCCESS, message: response.message };
            yield put(CommonAction.showToast(toastData));
        }
        yield put(CommonAction.stopLoading());
        action.success(response);
    } catch (error) {
        const message = error.response ? error.response && error.response.data && error.response.data.message : "Network Error or Server down, Please try again later."
        const toastData = { type: Toast.FAIL, message: message };
        yield put(CommonAction.showToast(toastData));
        yield put(CommonAction.stopLoading());
        action.failure(error);
    }
}

//favourites photographer

export function* addToFavourite(action) {
    try {
        yield put(CommonAction.startLoading());
        let endUrl = Urls.ADD_TO_FAVOURITE;
        let response = yield call(performPostRequest, endUrl, action.payload);
        if (response.status) {
            // const toastData = { type: Toast.SUCCESS, message: response.message };
            // yield put(CommonAction.showToast(toastData));
        }
        yield put(CommonAction.stopLoading());
        action.success(response);
    } catch (error) {
        const message = error.response ? error.response && error.response.data && error.response.data.message : "Network Error or Server down, Please try again later."
        const toastData = { type: Toast.FAIL, message: message };
        yield put(CommonAction.showToast(toastData));
        yield put(CommonAction.stopLoading());
        action.failure(error);
    }
}

export function* getPhotographerReviewsAndFlags(action) {
    try {
        yield put(CommonAction.startLoading());
        let endUrl = Urls.GET_PHOTOGRAPHER_REVIEWS_FLAGS;
        let response = yield call(performPostRequest, endUrl, action.payload);
        if (response.status) {
            // const toastData = { type: Toast.SUCCESS, message: response.message };
            // yield put(CommonAction.showToast(toastData));
        }
        yield put(CommonAction.stopLoading());
        action.success(response);
    } catch (error) {
        const message = error.response ? error.response && error.response.data && error.response.data.message : "Network Error or Server down, Please try again later."
        const toastData = { type: Toast.FAIL, message: message };
        yield put(CommonAction.showToast(toastData));
        yield put(CommonAction.stopLoading());
        action.failure(error);
    }
}


