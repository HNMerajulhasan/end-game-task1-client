import { async } from '@firebase/util'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UseUser } from '../../context/UseAuth'
import SignWith from './SignWith'

function Signup() {
  const navigate = useNavigate()
  const { sign_up } = useContext(UseUser)
  const submit_from_handler = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
    const user_data = {
      name,
      email,
      password,
      info: {
        photoUrl: 'https://i.ibb.co/yVKm1rw/dymmy-img.png',
        address: '',
        university: '',
        about_me: '',
      },
    }
    sign_up(email, password)
      .then((res) => {
        const set_user_db = async () => {
          try {
            const fetch_url = await fetch(
              `https://end-game-server-abdur-shobur.vercel.app/user`,
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(user_data),
              },
            )
            const data = await fetch_url.json()
            if (data) {
              navigate('/')
            }
          } catch (err) {
            console.log(err)
          }
        }
        set_user_db()
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className="h-screen bg-white">
      <div className=" py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
            Sign Up
          </h2>

          <form
            onSubmit={submit_from_handler}
            className="max-w-lg border rounded-lg mx-auto"
          >
            <div className="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label
                  htmlFor="name"
                  className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                >
                  User Name
                </label>
                <input
                  required
                  name="name"
                  className="w-full bg-gray-100 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                >
                  Email
                </label>
                <input
                  required
                  name="email"
                  className="w-full bg-gray-100 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                >
                  Password
                </label>
                <input
                  required
                  name="password"
                  className="w-full bg-gray-100 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                />
              </div>

              <button className="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                Sign Up
              </button>

              <SignWith />
            </div>

            <div className="flex justify-center items-center bg-gray-100 p-4">
              <p className="text-gray-500 text-sm text-center">
                Don't have an account?
                <Link
                  to="/login"
                  className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
