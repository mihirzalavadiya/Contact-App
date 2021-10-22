const initialState = [
    {
        id: 0,
        name: "Mihir Zalavadiya",
        email: "mihir@gmail.com",
        number: 4256362541,
    },
    {
        id: 1,
        name: "Sachin Rathod",
        email: "sachin@gmail.com",
        number: 4156362541,
    },
]

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            state = [...state, action.payload];
            return state;
        default:
            return state;
    }
}

export default contactReducer;