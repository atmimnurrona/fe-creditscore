import {
    FIND_ALL_CUSTOMER,
    FIND_CUSTOMER_BY_ID,
    REMOVE_CUSTOMER_BY_ID,
    UPDATE_CUSTOMER_BY_ID,
    SAVE_CUSTOMER
} from "../constants/actionConstant";

export function findAll(pagination) {
    return{
        type: FIND_ALL_CUSTOMER,
        pagination: {
            page: pagination.page,
            size: pagination.size
        }
    }
}