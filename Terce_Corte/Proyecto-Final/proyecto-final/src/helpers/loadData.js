import { doc, getDoc } from '@firebase/firestore'
import { db } from '../firebase/config'

export const loadUsers = async (uid) => {
    const response = await getDoc(doc(db, `users/${uid}`))
    const data = response.data()
    return data
}
