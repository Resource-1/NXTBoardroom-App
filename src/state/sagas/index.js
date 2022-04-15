import { takeEvery, all } from 'redux-saga/effects';

import * as AuthTypes from '../ducks/auth/types';
import * as JobTypes from '../ducks/jobs/types';

import { signIn, signInSocial, updateOnboarding, updateProfile, resendEmailVerificationCode, verifyEmailVerificationCode, forgotPassword, createPortfolio } from './auth';
import { addToFavourite, getJobsData, getNearByPhotographer, getPhotographerReviewsAndFlags, getPoserBookings, reportPhotographer, updateJobDetails, updateJobDetailsOfDay, updateJobStatus } from './jobs';

export default function* rootSaga() {
    yield all([
        // Auth
        yield takeEvery(AuthTypes.SIGN_IN, signIn),
        yield takeEvery(AuthTypes.SIGN_IN_SOCIAL, signInSocial),
        yield takeEvery(AuthTypes.UPDATE_ONBOARDING, updateOnboarding),
        yield takeEvery(AuthTypes.UPDATE_PROFILE, updateProfile),
        yield takeEvery(AuthTypes.RESEND_EMAIL_VERIFICATION_CODE, resendEmailVerificationCode),
        yield takeEvery(AuthTypes.VERIFY_EMAIL_VERIFICATION_CODE, verifyEmailVerificationCode),
        yield takeEvery(AuthTypes.FORGOT_PASSWORD, forgotPassword),
        yield takeEvery(AuthTypes.CREATE_PORTFOLIO, createPortfolio),

        //Job
        yield takeEvery(JobTypes.GET_JOBS_DATA, getJobsData),
        yield takeEvery(JobTypes.UPDATE_JOB_STATUS, updateJobStatus),
        yield takeEvery(JobTypes.UPDATE_JOB_DETAILS, updateJobDetails),
        yield takeEvery(JobTypes.UPDATE_JOB_DETAILS_OF_DAY, updateJobDetailsOfDay),


        //poser
        yield takeEvery(JobTypes.GET_POSER_BOOKINGS, getPoserBookings),
        yield takeEvery(JobTypes.GET_NEARBY_PHOTOGRAPHER, getNearByPhotographer),

        //report photographer
        yield takeEvery(JobTypes.REPORT_PHOTOGRAPHER, reportPhotographer),
        yield takeEvery(JobTypes.ADD_TO_FAVOURITE, addToFavourite),

        yield takeEvery(JobTypes.GET_PHOTOGRAPHER_REVIEWS_FLAGS, getPhotographerReviewsAndFlags),

    ]);
}