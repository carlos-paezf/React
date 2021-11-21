import { addDoc, collection, setDoc, doc } from '@firebase/firestore'
import { toast } from 'react-toastify'
import { db } from '../firebase/config'
import { types } from "../types/types"


export const create = (data) => {
    return {
        type: types.gameCreate,
        payload: data
    }
}


export const gameCreate = (data) => {
    return async (dispatch, getState) => {
        const { id } = getState().auth

        const ref = await addDoc(collection(db, `gamesAdmin/${id}/games/`), data)

        const idGame = await ref.id

        const newData = {
            ...data,
            idGame
        }

        await setDoc(doc(db, 'gamesPublic', `${idGame}`), newData)

        dispatch(create(newData))
        toast.success('Successfully created game')
    }
}


export const gameRead = (data) => {
    return {
        type: types.gameRead,
        payload: data
    }
}


export const gameUpdate = (idGame, data) => {
    return async (dispatch, getState) => {
        const { id } = getState().auth

        await setDoc(doc(db, `gamesAdmin/${id}/games/${idGame}`), data)

        const newData = {
            ...data,
            idGame
        }

        dispatch(gameRead(newData))
        toast.success('Successfuly update game')
    }
}

