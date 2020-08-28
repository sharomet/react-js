import { ADD_USER, REMOVE_USER } from '../constants'

const USERS = [
    { id: 1, name: 'Alex' },
    { id: 2, name: 'John' },
    { id: 3, name: 'Leo' },
    { id: 4, name: 'Bill' }
]

const users = (state = USERS, { type, id, name }) => {
    switch (type) {
        case ADD_USER :
            return [
                ...state, {
                    id,
                    name
                }
            ]
        case REMOVE_USER:
            return [...state].filter(user => user.id !== id)
        default:
            return state
    }
}

export default users