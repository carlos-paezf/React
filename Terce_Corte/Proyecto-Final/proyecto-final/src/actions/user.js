import { addDoc, collection, setDoc, doc } from "@firebase/firestore"
import { db } from '../firebase/config'
import { types } from "../types/types"


export const create = (data) => {
    return {
        type: types.userCreate,
        payload: data
    }
}


export const createUser = (uid, firstName, lastName, email) => {
    return async (dispatch) => {
        const data = {
            uid,
            firstName,
            lastName,
            email,
            admin: 0
        }

        await setDoc(doc(db, `users`, `${uid}` ), data)

        const newData = {
            ...data,
            uid
        }

        dispatch(create(newData))
    }
}


export const userRead = (data) => {
    return {
        type: types.userRead,
        payload: data
    }
}


export const userUpdate = (uid, firstName, lastName, username, email, admin) => {
    return async (dispatch) => {
        const data = {
            firstName,
            lastName,
            username,
            email,
            admin
        }
        await setDoc(doc(db, 'users', `${uid}`), data)
    }

}
