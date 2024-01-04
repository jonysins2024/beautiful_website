import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

const MainPage = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Header></Header> */}
      <Outlet />
    </>
  )
}

export default MainPage
