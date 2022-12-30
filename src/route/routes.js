import { createBrowserRouter } from 'react-router-dom'
import Laout from '../layout/Laout'
import About from '../page/about/About'
import Home from '../page/home/Home'
import Login from '../page/login/Login'
import Signup from '../page/login/Signup'
import Media from '../page/media/Media'
import PostDetails from '../page/media/PostDetails'
import Peoples from '../page/people/Peoples'
import PrivetRoute from './PrivetRoute'

const route = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivetRoute>
        <Laout />
      </PrivetRoute>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'media',
        element: <Media />,
      },
      {
        path: '/details/:id',
        element: <PostDetails />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'peoples',
        element: <Peoples />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: 'sign-up',
    element: <Signup />,
  },
])
export default route
