import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyD6UR5LrDwY9_EoEKHExckGsWMIslVthS8',
  authDomain: 'mymoney-e1cba.firebaseapp.com',
  projectId: 'mymoney-e1cba',
  storageBucket: 'mymoney-e1cba.appspot.com',
  messagingSenderId: '413180075714',
  appId: '1:413180075714:web:d618f593fe9025cb1da55b',
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
