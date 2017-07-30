import { takeEvery } from 'redux-saga/effects';
import * as consts from '../consts';
import requestIpFlow from './requestIpFlow';

export default function* rootSaga() {
    yield takeEvery(consts.REQUEST_IP, requestIpFlow);
}
