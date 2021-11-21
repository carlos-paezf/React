import { doc, getDoc, collection, getDocs } from '@firebase/firestore'
import { db } from '../firebase/config'

export const loadUsers = async (uid) => {
    const response = await getDoc(doc(db, `users/${uid}`))
    const data = response.data()
    return data
}


export const loadGamesOwners = async (uid) => {
    const response = await getDocs(collection(db, `${uid}/games/game`))
    const data = []
    response.forEach((game) => {
        const gameData = game.data()
        data.push({
            idGame: game.idGame,
            ...gameData
        })
    })
    return data
}
