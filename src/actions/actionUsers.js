import { ADD_USER, REMOVE_USER, EDIT_USER} from '../constants'

export const addUser = (id, name) => ({
    type: ADD_USER,
    id,
    name
})

export const removeUser = (id) => ({
    type: REMOVE_USER,
    id,
})

export const editUser = (id, name) => ({
    type: EDIT_USER,
    id,
    name
})