import React, { createContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import app from '../auth/FirebaseAuth'

export const UseUser = createContext()
function UseAuth({ children }) {
  const auth = getAuth(app)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [update_profile, set_update_profile] = useState(false)
  const [db_user, set_db_user] = useState(null)

  //  sing up
  const sign_up = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // login
  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const log_out = () => {
    setLoading(true)
    return signOut(auth)
  }
  useEffect(() => {
    if (user) {
      const load_user = async () => {
        try {
          const load_fetch = await fetch(
            `https://end-game-server-abdur-shobur.vercel.app/user-get-by-email?email=${user?.email}`,
          )
          const data = await load_fetch.json()
          setLoading(false)
          set_db_user(data)
        } catch (err) {
          console.log(err)
        }
      }
      load_user()
    } else {
      set_db_user(null)
    }
  }, [user, update_profile])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [auth])

  const value = {
    user,
    sign_up,
    loading,
    setLoading,
    login,
    log_out,
    db_user,
    update_profile,
    set_update_profile,
  }
  return <UseUser.Provider value={value}>{children}</UseUser.Provider>
}

export default UseAuth
