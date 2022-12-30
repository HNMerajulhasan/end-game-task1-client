import React, { useContext, useEffect, useState } from 'react'
import { BarLoader } from 'react-spinners'
import FeedCard from '../../component/card/FeedCard'
import { UseUser } from '../../context/UseAuth'
import PostMoreSection from '../home/PostMoreSection'

function Media() {
  const [post, set_post] = useState([])
  const [load_post, set_load_post] = useState(false)
  const { user, db_user } = useContext(UseUser)
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    fetch(`https://end-game-server-abdur-shobur.vercel.app/post-limited`)
      .then((res) => res.json())
      .then((data) => {
        set_post(data)
        setLoader(false)
      })
      .catch((err) => console.log(err))
  }, [load_post])
  return (
    <div className="feeds">
      {loader && (
        <div className="flex items-center justify-center mt-5">
          <BarLoader color="#36d7b7" width={'100%'} />
        </div>
      )}
      {post?.map((post) => (
        <FeedCard
          key={post._id}
          post={post}
          media="media"
          set_load_post={set_load_post}
          load_post={load_post}
          user={user}
          db_user={db_user}
        />
      ))}
    </div>
  )
}

export default Media
