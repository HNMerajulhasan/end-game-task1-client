import React from 'react'
import { BiImages } from 'react-icons/bi'
import { BsUpload } from 'react-icons/bs'

function CreatePost({ user, db_user, set_load_post }) {
  const post_form_handler = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    const post_text = e.target.post.value
    const post_image = e.target.image
    formData.append('image', post_image.files[0])
    let milliseconds = new Date().getTime()
    try {
      const fetch_url = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_ImgBB}`,
        {
          method: 'POST',
          'Content-Type': 'application/json',
          body: formData,
        },
      )
      const response = await fetch_url.json()
      if (response.success) {
        const all_data = {
          post_text,
          post_url: response.data.url,
          user_id: db_user?._id,
          user_name: db_user?.name,
          user_image: db_user?.info?.photoUrl,
          post_react: {
            like: Math.floor(Math.random() * 10) + 1,
            comment: Math.floor(Math.random() * 10) + 1,
            share: Math.floor(Math.random() * 10) + 1,
          },
          post_time: milliseconds,
        }

        const post_db = async () => {
          const fetch_url = await fetch(
            `https://end-game-server-abdur-shobur.vercel.app/post`,
            {
              method: 'POST',
              headers: {
                'Content-type': 'application/json',
              },
              body: JSON.stringify(all_data),
            },
          )
          const response = await fetch_url.json()
          set_load_post(true)
        }
        post_db()
      }
    } catch (err) {
      console.log(err)
    }
    e.target.reset()
  }
  return (
    <form className="create-post" onSubmit={post_form_handler}>
      <div className="profile-pic">
        <img src="images/profile-8.jpg" alt="" />
      </div>
      <input
        type="text"
        name="post"
        className="focus:outline-none px-5 py-2 text-xl"
        placeholder={`What's on your mind ${db_user?.name}?`}
        id="create-post"
      />
      <label htmlFor="icon-button-file">
        <BiImages
          color="primary"
          aria-label="upload picture"
          component="span"
          className="text-3xl mr-2 cursor-pointer"
        />
      </label>
      <input
        // accept="image/*"
        name="image"
        id="icon-button-file"
        type="file"
        style={{ display: 'none' }}
      />
      <input
        type="submit"
        disabled={!user}
        value="Post"
        className="btn btn-primary"
      />
    </form>
  )
}

export default CreatePost
