import { useReducer, useEffect, useState } from 'react'
import { projectFirestore } from '../firebase/config'

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
}

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return { ...state, isPending: true }
    default:
      return state
  }
}
export const useFirestore = (collection) => {
  const [responce, dispatch] = useReducer(firestoreReducer, initialState)
  const [isCancelled, setIsCancelled] = useState(false)

  // collection ref
  const ref = projectFirestore.collection(collection)

  // add doc
  const addDocument = (doc) => {
    dispatch({ type: 'IS_PENDING' })
  }

  // delete doc
  const deleteDocument = (id) => {}

  useEffect(() => {
    return () => {
      setIsCancelled(true)
    }
  }, [])

  return { addDocument, deleteDocument, responce }
}
