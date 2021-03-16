import {
    FIND_ALL_CUSTOMER, FIND_ALL_CUSTOMER_SUCCESS, FIND_ALL_CUSTOMER_FAILURE,
    FIND_CUSTOMER_BY_ID, FIND_CUSTOMER_BY_ID_SUCCESS, FIND_CUSTOMER_BY_ID_FAILURE,
    REMOVE_CUSTOMER_BY_ID, REMOVE_CUSTOMER_BY_ID_SUCCESS, REMOVE_CUSTOMER_BY_ID_FAILURE,
    UPDATE_CUSTOMER_BY_ID, UPDATE_CUSTOMER_BY_ID_SUCCESS, UPDATE_CUSTOMER_BY_ID_FAILURE,
    SAVE_CUSTOMER, SAVE_CUSTOMER_SUCCESS, SAVE_CUSTOMER_FAILURE
} from "../constants/actionConstant";

import {takeLatest, put} from 'redux-saga/effects';
import axios from '../configs/api'
import pagination from "./pagination";

function* findAllCustomer(action) {
    let parameter = pagination(action)

    let result = yield axios.get(`/customer?${parameter}`)
        .then(data => {
            return {
                type: FIND_ALL_CUSTOMER_SUCCESS,
                data: data.list,
                pagination: {
                    size: data.size,
                    total: data.total,
                    page: data.page
                },
            };
        })
        .catch((err) => {
            return {
                type: FIND_ALL_CUSTOMER_FAILURE,
                error: err
            };
        });
    yield put(result)
}

export function* watchFindAllCustomer() {
    yield takeLatest(FIND_ALL_CUSTOMER, findAllCustomer())
}