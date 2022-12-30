import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../component/nav/Nav'
import Footer from '../page/footer/Footer'
import FooterBar from '../page/footer/FooterBar'
import Home from '../page/home/Home'
import LeftSidebar from '../page/leftSidebar.js/LeftSidebar'
import RightSidebar from '../page/rightSidebar/RightSidebar'

function Laout() {
  return (
    <>
      <Nav />
      <main>
        <div className="container min-h-screen">
          <LeftSidebar />
          <Outlet />
          <RightSidebar />
        </div>
      </main>
    </>
  )
}

export default Laout
