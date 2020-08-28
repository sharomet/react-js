import { ADD_USER, REMOVE_USER       } from '../constants'

export const addUser = (id, name) => ({
    type: ADD_USER,
    id,
    name
})

export const removeUser = (id) => ({
    type: REMOVE_USER,
    id,
})