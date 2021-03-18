import {
    FIND_ALL_CUSTOMER,
    FIND_CUSTOMER_BY_ID,
    REMOVE_CUSTOMER_BY_ID,
    UPDATE_CUSTOMER_BY_ID,
    SAVE_CUSTOMER
} from "../constants/actionConstant";

export function findAll() {
    return{
        type: FIND_ALL_CUSTOMER

    }
}