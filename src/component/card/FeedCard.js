import React, { useEffect, useState } from 'react'
import { AiOutlineLike, AiOutlineShareAlt } from 'react-icons/ai'
import { BiCommentDots } from 'react-icons/bi'
import { BsBookmarkCheck, BsUpload } from 'react-icons/bs'
import userr from '../../assets/images/userlist-2.jpg'
import post from '../../assets/images/user-post6.jpg'
import { Link } from 'react-router-dom'

function FeedCard({
  post,
  user,
  db_user,
  load_post,
  set_load_post,
  media,
  hide,
}) {
  const [comment, setComment] = useState([])
  const [load_comment, set_load_comment] = useState(true)
  useEffect(() => {
    fetch(
      `https://end-game-server-abdur-shobur.vercel.app/comment?_id=${post?._id}`,
    )
      .then((res) => res.json())
      .then((data) => setComment(data))
      .catch((err) => console.log(err))
  }, [post, load_comment])

  const {
    post_text,
    post_url,
    user_id,
    user_name,
    user_image,
    post_react,
    post_time,
  } = post
  const comment_handler = (e) => {
    e.preventDefault()
    let milliseconds = new Date().getTime()
    const comment = e.target.comment.value

    const all_data = {
      comment,
      create_time: milliseconds,
      user_photo: db_user?.info?.photoUrl,
      user_name: db_user?.name,
      user_id: db_user?._id,
      post_id: post?._id,
    }

    const update_comment = async () => {
      const fetch_url = await fetch(
        `https://end-game-server-abdur-shobur.vercel.app/comment`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(all_data),
        },
      )
      const response = await fetch_url.json()

      set_load_comment(!load_comment)
    }
    update_comment()
    e.target.reset()
  }
  const update_like_handler = (e, likes) => {
    const like = likes + 1
    const data = {
      like,
      comment: post.post_react.comment,
      share: post.post_react.share,
    }
    const get_fetch_data = async () => {
      const fetch_url = await fetch(
        `https://end-game-server-abdur-shobur.vercel.app/post?_id=${e}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        },
      )
      const response = await fetch_url.json()
      set_load_post(!load_post)
    }

    get_fetch_data()
  }
  return (
    <div className="feed">
      <div className="head"></div>
      <div className="user">
        <div className="profile-pic">
          <img src={user_image} alt="" />
        </div>
        <div className="info">
          <h3 className="text-blue-700 font-semibold">{user_name}</h3>
          <small>{new Date(post_time).toLocaleTimeString()}</small>
        </div>
        <span className="edit">
          <i className="uil uil-ellipsis-h"></i>
        </span>
      </div>

      <div className="bg-[#faf8ff] p-3 rounded">
        <p>{post_text}</p>
        {!hide && (
          <Link
            to={`/details/${post._id}`}
            className="bg-[#6b4ce6] text-white px-4 py-1 mt-4 rounded text-xs"
          >
            Read More
          </Link>
        )}
      </div>

      <div className="photo">
        <img className="max-h-96 object-cover" src={post_url} alt="" />
      </div>

      <div className="action-button !my-6">
        <div className="flex gap-6">
          <div className="flex ">
            <AiOutlineLike
              onClick={() => update_like_handler(post._id, post_react.like)}
              className="text-blue-700 cursor-pointer hover:text-fuchsia-600"
            />
            <span className="text-sm text-blue-700">{post_react.like}</span>
          </div>
          <div className="flex ">
            <BiCommentDots className="text-green-700" />
            <span className="text-sm text-green-600">{post_react.comment}</span>
          </div>
          <div className="flex ">
            <AiOutlineShareAlt className="text-orange-700" />
            <span className="text-sm text-orange-700">{post_react.share}</span>
          </div>
        </div>
        <div className="bookmark text-[#6b4ce6]">
          <BsBookmarkCheck />
          <span></span>
        </div>
      </div>
      {comment?.map((e) => (
        <div
          key={e._id}
          className="flex bg-[#efeef5] gap-5 my-2 p-3 ml-10 rounded"
        >
          <div>
            <img
              className="rounded-full w-10 h-10 object-cover"
              src={e.user_photo}
              alt=""
            />
          </div>
          <div>
            <p className="text-blue-700">{e.user_name}</p>
            <p className="text-stone-700">{e.comment}</p>
            <p className="text-xs text-green-700">
              {new Date(e.create_time).toLocaleTimeString()}
            </p>
          </div>
        </div>
      ))}

      <div className=" ">
        <form className="create-comment" onSubmit={comment_handler}>
          <input
            type="text"
            name="comment"
            className="focus:outline-none px-5 py-2 text-base w-full"
            placeholder="Add a Comment !"
            id="create-post"
          />

          <input type="submit" value="Comment" className="btn btn-primary" />
        </form>
      </div>
    </div>
  )
}

export default FeedCard
