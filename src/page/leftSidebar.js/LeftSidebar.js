import React, { useContext } from 'react'
import {
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineLogout,
  AiOutlineUser,
  AiOutlineUserAdd,
} from 'react-icons/ai'
import { TfiLayoutMediaLeftAlt } from 'react-icons/tfi'
import { BiLogOutCircle } from 'react-icons/bi'
import { Link, NavLink } from 'react-router-dom'
// import user from '../../assets/images/userlist-2.jpg'
import { UseUser } from '../../context/UseAuth'
import { BsPeople } from 'react-icons/bs'
const nav_items = [
  {
    path: '/',
    nav_item: 'Home',
    icon: <AiOutlineHome className="i" />,
  },
  {
    path: 'media',
    nav_item: 'Media',
    icon: <TfiLayoutMediaLeftAlt className="i" />,
  },
  {
    path: 'peoples',
    nav_item: 'Peoples',
    icon: <BsPeople className="i" />,
  },
  {
    path: 'about',
    nav_item: 'About',
    icon: <AiOutlineUser className="i" />,
  },
]

function LeftSidebar() {
  const { log_out, user, db_user } = useContext(UseUser)
  const sign_out_btn = () => {
    log_out()
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }
  return (
    <div className="left">
      <div className="!bg-white p-4 rounded-xl">
        <Link to="about" className="flex gap-5">
          <div className="profile-pic">
            <img src={db_user?.info?.photoUrl} alt="user" />
          </div>
          <div className="handle user_profile">
            <h4>{db_user?.name}</h4>
            <p className="text-muted lowercase">
              @{db_user?.name.replaceAll(' ', '')}
            </p>
          </div>
        </Link>
      </div>
      <div className="sidebar">
        {nav_items.map((e, i) => (
          <NavLink
            key={i}
            to={e.path}
            className={`menu-item ${(isActive) => (isActive ? 'active' : '')}`}
            // className="menu-item"
          >
            <span>{e.icon}</span>
            <h3>{e.nav_item}</h3>
          </NavLink>
        ))}

        {user && (
          <button
            onClick={sign_out_btn}
            className="menu-item w-full gap-5 text-red-600 "
          >
            <BiLogOutCircle className="ml-7 text-2xl text-red-600" />
            <span className="log_out_show">Log out</span>
          </button>
        )}
        <label className="btn btn-primary" htmlFor="create-post">
          Create Post
        </label>
      </div>
    </div>
  )
}

export default LeftSidebar
