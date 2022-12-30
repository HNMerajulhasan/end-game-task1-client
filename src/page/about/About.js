import { async } from '@firebase/util'
import React, { useContext, useState } from 'react'
import { BsUpload } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import img from '../../assets/images/userlist-2.jpg'
import { UseUser } from '../../context/UseAuth'
function About() {
  const [toggle, setToggle] = useState(false)
  const { user, db_user, update_profile, set_update_profile } = useContext(
    UseUser,
  )
  const update_form_handler = (e) => {
    e.preventDefault()
    let target = e.target
    const name = target.name.value
    const address = target.address.value
    const university = target.university.value
    const about_me = target.about_me.value
    const post_image = e.target.image
    let formData = new FormData()
    formData.append('image', post_image.files[0])

    const photo_upload = async () => {
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
          const user_data = {
            name,
            info: {
              photoUrl: response.data.url,
              address,
              university,
              about_me,
            },
          }

          const update_user = async () => {
            const fetch_url = await fetch(
              `https://end-game-server-abdur-shobur.vercel.app/user?_id=${db_user?._id}`,
              {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user_data),
              },
            )
            const response = await fetch_url.json()
            console.log(response)
            set_update_profile(true)
          }

          update_user()
          setToggle(false)
        }
      } catch (err) {
        console.log(err)
        setToggle(false)
      }
    }
    photo_upload()
  }
  return (
    <div className="bg-white rounded-xl">
      <div className="p-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-5">
            <div className="flex items-center gap-1 justify-center flex-col">
              <h1 className="text-stone-700 font-semibold text-2xl">37</h1>
              <h1 className="text-stone-600 text-sm">Friends</h1>
            </div>
            <div className="flex items-center gap-1 justify-center flex-col">
              <h1 className="text-stone-700 font-semibold text-2xl">23</h1>
              <h1 className="text-stone-600 text-sm">Photo</h1>
            </div>
            <div className="flex items-center gap-1 justify-center flex-col">
              <h1 className="text-stone-700 font-semibold text-2xl">64</h1>
              <h1 className="text-stone-600 text-sm">Comments</h1>
            </div>
          </div>
          <div>
            {toggle ? (
              <RxCross2
                onClick={() => setToggle(!toggle)}
                className="bg-[#f22536] text-3xl p-1 text-white rounded-md cursor-pointer"
              />
            ) : (
              <button
                onClick={() => setToggle(!toggle)}
                className="bg-[#6b4ce6] px-4 py-2 text-white rounded-md"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>

        {/* edit form  */}
        {toggle && (
          <div className="bg-[#efeef5] p-3 rounded my-5">
            <h1 className="text-xl text-blue-700">Edit Profile</h1>
            <form
              className="flex flex-col gap-3 px-5"
              onSubmit={update_form_handler}
            >
              {/* name  */}
              <div className="flex gap-1 flex-col mt-2">
                <label className="text-lg" htmlFor="name">
                  Name:
                </label>
                <input
                  className="w-full focus:outline-none px-5 py-1 text-lg rounded"
                  type="text"
                  name="name"
                  id="name"
                  defaultValue={user && db_user?.name}
                  placeholder={user && db_user?.name}
                />
              </div>
              {/* university  */}
              <div className="flex gap-1 flex-col mt-2">
                <label className="text-lg" htmlFor="university">
                  University:
                </label>
                <input
                  className="w-full focus:outline-none px-5 py-1 text-lg rounded"
                  type="text"
                  name="university"
                  id="university"
                  defaultValue={user && db_user?.info?.university}
                  placeholder={user && db_user?.info?.university}
                />
              </div>
              {/* address   */}
              <div className="flex gap-1 flex-col mt-2">
                <label className="text-lg" htmlFor="address">
                  Address:
                </label>
                <input
                  className="w-full focus:outline-none px-5 py-1 text-lg rounded"
                  type="text"
                  name="address"
                  id="address"
                  defaultValue={user && db_user?.info?.address}
                  placeholder={user && db_user?.info?.address}
                />
              </div>
              {/* phot up  */}
              <div className="flex gap-1 flex-col mt-2 ">
                <span className="text-lg">Photo Upload</span>
                <label
                  htmlFor="icon-button-file"
                  className="!cursor-pointer bg-white rounded p-2"
                >
                  <BsUpload
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    className="text-3xl mr-2"
                  />
                </label>
                <input
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                  name="image"
                  style={{ display: 'none' }}
                />
              </div>
              <div className="flex gap-1 flex-col mt-2">
                <label className="text-lg" htmlFor="about_me">
                  About Me:
                </label>
                <textarea
                  className="w-full focus:outline-none px-5 py-1 text-lg rounded"
                  type="text"
                  name="about_me"
                  id="about_me"
                  defaultValue={user && db_user?.info?.about_me}
                  placeholder={user && db_user?.info?.about_me}
                />
              </div>

              <button
                type="submit"
                className="bg-[#6b4ce6] text-white py-1 rounded"
              >
                Update
              </button>
            </form>
          </div>
        )}
        {/* end edit from  */}

        <div className="flex justify-center items-center">
          <img
            src={user && db_user?.info?.photoUrl}
            alt=""
            className="w-40 rounded-full"
          />
        </div>
        <h1 className="text-center text-2xl mt-5">
          Name: {user && db_user?.name}
        </h1>
        <h1 className="text-center text-2xl mt-5">
          Email: {user && db_user?.email}
        </h1>
        <h1 className="text-center text-2xl mt-5">
          University: {user && db_user?.info?.university}
        </h1>
        <h1 className="text-center text-2xl mt-5">
          Address: {user && db_user?.info?.address}
        </h1>
        <h1 className="text-2xl mt-5 underline">About Me: </h1>
        <p className="text-xl mt-2">{user && db_user?.info?.about_me}</p>
      </div>
    </div>
  )
}

export default About
