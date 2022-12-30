import React, { useContext, useEffect, useState } from 'react'
import FeedCard from '../../component/card/FeedCard'
import { UseUser } from '../../context/UseAuth'
import CreatePost from './CreatePost'
import PostBox from './PostBox'
import PostMoreSection from './PostMoreSection'
import Story from './Story'
import PuffLoader from 'react-spinners/PuffLoader'
import { BarLoader } from 'react-spinners'

function Home() {
  const { user, db_user } = useContext(UseUser)
  const [post, set_post] = useState([])
  const [load_post, set_load_post] = useState(false)
  const [loader, setLoader] = useState(true)
  // setLoader(true)
  useEffect(() => {
    fetch(`https://end-game-server-abdur-shobur.vercel.app/post`)
      .then((res) => res.json())
      .then((data) => {
        set_post(data)
        setLoader(false)
      })
      .catch((err) => console.log(err))
  }, [load_post])

  return (
    <div className="middle">
      <Story />

      <CreatePost user={user} db_user={db_user} set_load_post={set_load_post} />

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
            user={user}
            db_user={db_user}
            set_load_post={set_load_post}
            load_post={load_post}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
