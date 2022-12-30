import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { FadeLoader } from 'react-spinners'
import PuffLoader from 'react-spinners/PuffLoader'
import { UseUser } from '../context/UseAuth'

function PrivetRoute({ children }) {
  const { user, loading } = useContext(UseUser)
  const location = useLocation()
  console.log(loading)
  if (loading) {
    return (
      <div className="h-screen bg-white">
        <div className="flex justify-center items-center h-full">
          <PuffLoader color="#36d7b7" />
        </div>
      </div>
    )
  }

  if (user) {
    return children
  }
  return <Navigate to="/login" state={{ from: location }} replace />
}

export default PrivetRoute
