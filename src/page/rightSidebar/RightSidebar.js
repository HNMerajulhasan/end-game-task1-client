import React from 'react'
import user from '../../assets/images/userlist-2.jpg'
import { SiGooglemessages } from 'react-icons/si'
import { AiOutlineLike, AiTwotoneBell } from 'react-icons/ai'
import FriendsList from '../../component/listItems/FriendsList'
import FriendReqCard from '../../component/card/FriendReqCard'
import MessageCard from '../../component/card/MessageCard'

function RightSidebar() {
  return (
    <div className="right">
      <div className="messages">
        <div className="heading">
          <h4>Messages</h4>
          <span>
            <i className="uil uil-edit"></i>
          </span>
        </div>

        <div className="search-bar">
          <span>
            <i className="uil uil-search"></i>
          </span>
          <input
            type="search"
            className="focus:outline-none px-5 py-1 text-lg"
            placeholder="Search Messages"
            id="message-search"
          />
        </div>

        <div className="category">
          <h6 className="active">Primary</h6>
          <h6>General</h6>
          <h6 className="message-requests">Requests(7)</h6>
        </div>
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
      </div>
      <div className="friend-requests ">
        <h4>Requests</h4>
        <div className="flex flex-col gap-2">
          <FriendReqCard />
          <FriendReqCard />
          <FriendReqCard />
        </div>
      </div>
    </div>
  )
}

export default RightSidebar
