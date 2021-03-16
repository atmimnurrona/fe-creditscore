
let initialState = {
    users: [
        {
            id: 1,
            idCustomer: 1,
            typeCustomer: "non-employee",
            idEmployee: 3,
            loan: 2000000,
            interestRate: 2,
            tenor: 3
        },
        {
            id: 2,
            idCustomer: 2,
            typeCustomer: "permanent",
            idEmployee: 1,
            loan: 3000000,
            interestRate: 2,
            tenor: 3
        },
        {
            id: 3,
            idCustomer: 3,
            typeCustomer: "temporary",
            idEmployee: 2,
            loan: 2000000,
            interestRate: 2,
            tenor: 3
        },
        {
            id: 4,
            idCustomer: 4,
            typeCustomer: "permanent",
            idEmployee: 1,
            loan: 6000000,
            interestRate: 2,
            tenor: 3
        },
    ],
    error: false,
    title: 'users'
};

const users = (state = initialState, action) => {
    return state
}

export default users