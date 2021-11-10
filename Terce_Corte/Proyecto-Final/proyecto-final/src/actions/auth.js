import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from '@firebase/auth'
import { auth, googleAuthProvider } from '../firebase/config'
import { toast } from 'react-toastify'
import { types } from '../types/types'
import { createUser } from './user'


export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            id: uid,
            username: displayName
        }
    }
}


export const googleLogin = () => {
    return (dispatch) => {
        toast.promise(
            signInWithPopup(auth, googleAuthProvider)
                .then(({ user }) => {
                    dispatch(login(user.uid, user.displayName))
                    const dn = user.displayName.split(' ')
                    dispatch(createUser(user.uid, dn[0], dn[2], user.email))
                }),
                // .catch((error) => {
                //     toast.error('Error with Google Auth')
                //     console.log(`Error in Auth with Google: ${error}`)
                // }),
            {
                pending: 'Waiting for the choice of an account ',
                success: 'Success Login with Google',
                error: 'Action reject'
            }
        )
    }
}


export const emailAndPasswordLogin = (email, password) => {
    return (dispatch) => {
        toast.promise(
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
            }),
            // .catch(error => {
            //     if (error.message === 'Firebase: Error (auth/user-not-found).') {
            //         console.log(`${error.message}`)
            //         toast.error("User not found")
            //     }
            // }),
            {
                pending: 'Wait a moment',
                success: 'Hi again friend!',
                error: 'User not found'
            }
        )
    }
}


export const logout = () => {
    return async (dispatch) => {
        await signOut(auth)
        toast.info('Good Bye!')
        dispatch({
            type: types.logout
        })
    }
}


export const register = (email, username, password, firstName, lastName) => {
    return (dispatch) => {
        toast.promise(
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, { displayName: username })
                toast.success('Success Register')
                dispatch(login(user.uid, user.displayName))
                dispatch(createUser(user.uid, firstName, lastName, email))
            }),
            // .catch(error => {
            //     toast.error('Error in Register')
            //     console.log(error);
            // }),
            {
                promise: 'Wait a moment',
                success: 'Hi. Welcome!',
                error: 'Error in Register'
            }
        )
    }
}
