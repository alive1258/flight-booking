import { BOOK, DELETE } from "./actionType";
const initialState = []

const bookReducer = (state = initialState, action) => {
    const copiedState = [...state]
    const { type, payload, id } = action

    switch (type) {
        case BOOK:

            //   aad Book 
            const lastBookId = copiedState[copiedState.length - 1]?.id
            const newBook = { ...payload, id: lastBookId ? (lastBookId + 1) : 1 }
            copiedState.push(newBook)

        //delete book
        case DELETE:
            const updateState = copiedState.filter(item => item.id !== id)
            return updateState



        default:
            return state;
    }

};

export default bookReducer;