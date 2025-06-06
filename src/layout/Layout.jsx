import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <>
        <div className="min-h-screen flex flex-col">
        <Header/>
        <Outlet/>
        <Footer/>
        </div>
    </>
  )
}

export default Layout