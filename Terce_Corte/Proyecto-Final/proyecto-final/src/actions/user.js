import { setDoc, doc } from "@firebase/firestore"
import { db } from '../firebase/config'
import { types } from "../types/types"
import { toast } from "react-toastify"


export const userRead = (data) => {
    return {
        type: types.userRead,
        payload: data
    }
}


export const userCreateOrUpdate = (uid, firstName, lastName, username, email, admin) => {
    return async (dispatch) => {
        const data = {
            firstName,
            lastName,
            username,
            email,
            admin,
            uid
        }
        await setDoc(doc(db, 'users', `${uid}`), data)

        const newData = {
            ...data,
            uid
        }

        dispatch(userRead(newData))
        toast.success('Action success')
    }
}
