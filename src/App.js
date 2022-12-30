import React from 'react'
// import './assets/css/main.min.css'
// import './assets/css/style.css'
// import './assets/css/color.css'
// import './assets/css/responsive.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { RouterProvider } from 'react-router-dom'
import route from './route/routes'
import './App.css'
function App() {
  return <RouterProvider router={route} />
}

export default App
