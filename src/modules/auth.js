import { auth, googleProvider, facebookProvider } from '../firebase'

//action type

const GET_USER = 'GET_USER'

export const googleLogin = () => auth.signInWithPopup(googleProvider)

export const facebookLogin = () => auth.signInWithPopup(facebookProvider)

export const logout = () => auth.signOut()

export const getUser = () => dispatch => {
  auth.onAuthStateChanged(user => {
    dispatch({
      type: GET_USER,
      payload: user,
    })
  })
}

//reducer
export default function authReducer(state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload //user
    default:
      return state
  }
}
