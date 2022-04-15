import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios";
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { Globals } from "../utils/globals";

import { getAxiosInstance, getAxiosInstanceFileUpload, getAxiosInstanceFileUploadCloudinary, getAxiosInstanceGoogle, getAxiosInstanceMangopay } from "./axiosWrapper";
import Urls from "./Urls";

const refreshAuthLogic = failedRequest =>
    axios.post(Urls.BASE_URL + Urls.REFRESH_TOKEN, {
        "refreshToken": Globals.kRefreshToken
    }).then(async (tokenRefreshResponse) => {
        const kRefreshToken = tokenRefreshResponse.data.payload.tokens.refresh.token
        const kAccessToken = tokenRefreshResponse.data.payload.tokens.access.token

        await AsyncStorage.setItem("userToken", kAccessToken)
        await AsyncStorage.setItem("refreshToken", kRefreshToken)
        Globals.kUserToken = kAccessToken;
        Globals.kRefreshToken = kRefreshToken;

        failedRequest.response.config.headers['Authorization'] = kAccessToken;
        return Promise.resolve();
    });

export const performGetRequest = (endPoint) => {
    let token = Globals.kUserToken;
    let instance = getAxiosInstance(token);
    createAuthRefreshInterceptor(instance, refreshAuthLogic);

    return instance.get(endPoint)
        .then(response => response.data)
        .catch(e => {
            throw e;
        })
}

export const performPostRequest = (endPoint, data) => {
    let token = Globals.kUserToken;
    let instance = getAxiosInstance(token);
    createAuthRefreshInterceptor(instance, refreshAuthLogic);

    return instance.post(endPoint, data)
        .then(response => response.data)
        .catch(e => {
            throw e;
        });
}

export const performPutRequest = (endPoint, data) => {
    const token = Globals.kUserToken;
    const instance = getAxiosInstance(token);
    createAuthRefreshInterceptor(instance, refreshAuthLogic);

    return instance.put(endPoint, data)
        .then(response => response.data)
        .catch(e => {
            throw e;
        });
}

export const performDeleteRequest = (endPoint, data) => {
    const token = Globals.kUserToken;
    const instance = getAxiosInstance(token);
    createAuthRefreshInterceptor(instance, refreshAuthLogic);

    return instance.delete(endPoint, data)
        .then(response => response.data)
        .catch(e => {
            throw e;
        });
}

export const performPostRequestWithFile = (endPoint, data) => {
    let token = Globals.kUserToken;
    let instance = getAxiosInstanceFileUpload(token);
    createAuthRefreshInterceptor(instance, refreshAuthLogic);

    return instance.post(endPoint, data)
        .then(response => response.data)
        .catch(e => {
            throw e;
        });
}

export const performPutRequestWithFile = (endPoint, data) => {
    const token = Globals.kUserToken;
    const instance = getAxiosInstanceFileUpload(token);
    createAuthRefreshInterceptor(instance, refreshAuthLogic);

    return instance.put(endPoint, data)
        .then(response => response.data)
        .catch(e => {
            throw e;
        });
}

export const performPostRequestWithFileCloudinary = (endPoint, data) => {
    let token = Globals.kUserToken;
    let instance = getAxiosInstanceFileUploadCloudinary(token);
    createAuthRefreshInterceptor(instance, refreshAuthLogic);

    return instance.post(endPoint, data)
        .then(response => response.data)
        .catch(e => {
            throw e;
        });
}

export const performGetRequestGoogle = (endPoint) => {
    const instance = getAxiosInstanceGoogle();

    return instance.get(endPoint)
        .then(response => response.data)
        .catch(e => {
            throw e;
        });
}