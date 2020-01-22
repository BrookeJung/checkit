import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyB15pdOAHZvpqq4xIV7TkwbFY_g57kCMbQ',
  authDomain: 'checkit-zeze.firebaseapp.com',
  databaseURL: 'https://checkit-zeze.firebaseio.com',
  projectId: 'checkit-zeze',
  storageBucket: 'checkit-zeze.appspot.com',
  messagingSenderId: '799010881482',
  appId: '1:799010881482:web:cc64a3d8364d09ff9b9933',
  measurementId: 'G-W3RRGNNRJB',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

export const database = firebase.database().ref('/notes')
export const auth = firebase.auth() //authenticatino status
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const facebookProvider = new firebase.auth.FacebookAuthProvider()
