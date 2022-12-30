import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/userlist-2.jpg'
import { UseUser } from '../../context/UseAuth'

function Nav() {
  const { user, db_user } = useContext(UseUser)

  return (
    <nav>
      <div className="container">
        <Link to="/" className="logo text-xl text-purple-800 font-semibold">
          Social App
        </Link>
        <div className="search-bar">
          <i className="uil uil-search"></i>
          <input
            type="search"
            className="focus:outline-none px-5 py-2 text-xl"
            placeholder="Search for creators, inspirations and projects"
          />
        </div>
        <div className="create">
          <label className="btn btn-primary" htmlFor="create-post">
            <Link to="/">Create</Link>
          </label>
          <div className="profile-pic">
            <Link to="about">
              <img src={db_user?.info?.photoUrl} alt="pic 1" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
