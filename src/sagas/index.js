import { all } from 'redux-saga/effects';
import {watchFindAllCustomer} from "./unitSagas";

export default function* rootSaga() {
    yield all([
        watchFindAllCustomer()
    ])
}