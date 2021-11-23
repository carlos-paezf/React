import { doc, getDoc, collection, getDocs } from '@firebase/firestore'
import { db } from '../firebase/config'


export const loadUsers = async (uid) => {
    const response = await getDoc(doc(db, `users/${uid}`))
    const data = response.data()
    return data
}


export const loadGamesOwners = async (uid) => {
    const response = await getDocs(collection(db, `gamesAdmin/${uid}/games`))
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


export const loadGames = async () => {
    const response = await getDocs(collection(db, `gamesPublic`))
    const data = []
    response.forEach((doc) => {
        data.push(doc.data())
    })
    return data
}
