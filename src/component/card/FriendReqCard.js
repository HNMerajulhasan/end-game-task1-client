import React from 'react'
import user from '../../assets/images/userlist-2.jpg'

function FriendReqCard() {
  return (
    <div className="request">
      <div className="info">
        <div className="profile-pic">
          <img src={user} />
        </div>
        <div>
          <h5>Christ Kahea</h5>
          <p className="text-muted">1 mutual friend</p>
        </div>
      </div>
      <div className="action">
        <button className="btn btn-primary">Accept</button>
        <button className="btn text-rose-50 bg-red-600">Decline</button>
      </div>
    </div>
  )
}

export default FriendReqCard
