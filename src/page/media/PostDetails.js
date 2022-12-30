import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FeedCard from '../../component/card/FeedCard'
import { UseUser } from '../../context/UseAuth'

function PostDetails() {
  const [post, setPost] = useState([])
  const { user, db_user } = useContext(UseUser)
  // const [post, set_post] = useState([])
  const [load_post, set_load_post] = useState(false)

  const params = useParams()
  const id = params.id
  useEffect(() => {
    const fetch_fun = async () => {
      const fetch_url = await fetch(
        `https://end-game-server-abdur-shobur.vercel.app/post-by-id?id=${id}`,
      )
      const response = await fetch_url.json()
      setPost(response)
    }
    fetch_fun()
  }, [id, load_post])
  console.log(post)
  return (
    <div className="feeds">
      {post?.map((post) => (
        <FeedCard
          key={post._id}
          post={post}
          user={user}
          db_user={db_user}
          set_load_post={set_load_post}
          load_post={load_post}
          hide
        />
      ))}
    </div>
  )
}

export default PostDetails
