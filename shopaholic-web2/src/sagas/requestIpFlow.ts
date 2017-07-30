import { call } from 'redux-saga/effects';
import { ServiceUtils } from '../core/utils';

function requestIp() {
    return ServiceUtils.GET('http://ip.jsontest.com/');
}

export default function* requestIpFlow(action: {}) {
    try {
        const response = yield call(requestIp, action);
        console.log('data', response.data);
    } catch (e) {
        console.log('error', e);
    }
}