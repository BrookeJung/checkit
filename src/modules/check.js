import { database } from '../firebase'

//1. action type
export const GET_NOTES = 'GET_NOTES'
export const ADD_NOTE = 'ADD_NOTE'
export const DEL_NOTE = 'DEL_NOTE'
//2. action creator
export const getNotes = () => dispatch => {
  database.on('value', snapshot => {
    dispatch({
      type: GET_NOTES,
      payload: snapshot.val(),
    })
  })
}

export const saveNote = note => {
  return dispatch => database.push(note)
}

export const delNote = id => {
  return dispatch => database.child(id).remove()
}
//3. reducer
export default function checkReducer(state = {}, action) {
  switch (action.type) {
    case GET_NOTES:
      return action.payload
    default:
      return state
  }
}
