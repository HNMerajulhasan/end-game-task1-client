import React from 'react'
import user from '../../assets/images/userlist-2.jpg'

function MessageCard() {
  return (
    <div className="message">
      <div className="profile-pic">
        <img src={user} />
        <div className="active"></div>
      </div>
      <div className="message-body">
        <h5>Jahnvi Doifode</h5>
        <p className="text-bold">3 New Messages</p>
      </div>
    </div>
  )
}

export default MessageCard
