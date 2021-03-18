import {
    FIND_ALL_CUSTOMER, FIND_ALL_CUSTOMER_SUCCESS, FIND_ALL_CUSTOMER_FAILURE,
    FIND_CUSTOMER_BY_ID, FIND_CUSTOMER_BY_ID_SUCCESS, FIND_CUSTOMER_BY_ID_FAILURE,
    REMOVE_CUSTOMER_BY_ID, REMOVE_CUSTOMER_BY_ID_SUCCESS, REMOVE_CUSTOMER_BY_ID_FAILURE,
    UPDATE_CUSTOMER_BY_ID, UPDATE_CUSTOMER_BY_ID_SUCCESS, UPDATE_CUSTOMER_BY_ID_FAILURE,
    SAVE_CUSTOMER, SAVE_CUSTOMER_SUCCESS, SAVE_CUSTOMER_FAILURE
} from "../constants/actionConstant";

const initialState = {
    data: null,
    pagination: {
        size: null,
        total: null,
        page: null
    },
    isLoading: false,
    error: null,
}

export const findAllCustomer = (state = initialState, data) => {
    switch (data.type) {
        case FIND_ALL_CUSTOMER:
            return {
                ...state,
                isLoading: true
            };

        case FIND_ALL_CUSTOMER_SUCCESS:
            return {
                data: data.data,
                isLoading: false,
                error: null
            };

        case FIND_ALL_CUSTOMER_FAILURE:
            return {
                data: null,
                isLoading: false,
                error: data.error
            };
        default:
            return {
                ...state,
                isLoading: false,
                error: null
            };
    }
}

// let initialState = {
//     users: [
//         {
//             id: 1,
//             idCustomer: 1,
//             typeCustomer: "non-employee",
//             idEmployee: 3,
//             loan: 2000000,
//             interestRate: 2,
//             tenor: 3
//         },
//         {
//             id: 2,
//             idCustomer: 2,
//             typeCustomer: "permanent",
//             idEmployee: 1,
//             loan: 3000000,
//             interestRate: 2,
//             tenor: 3
//         },
//         {
//             id: 3,
//             idCustomer: 3,
//             typeCustomer: "temporary",
//             idEmployee: 2,
//             loan: 2000000,
//             interestRate: 2,
//             tenor: 3
//         },
//         {
//             id: 4,
//             idCustomer: 4,
//             typeCustomer: "permanent",
//             idEmployee: 1,
//             loan: 6000000,
//             interestRate: 2,
//             tenor: 3
//         },
//     ],
//     error: false,
//     title: 'users'
// };

// const users = (state = initialState, action) => {
//     return state
// }
//
// export default users