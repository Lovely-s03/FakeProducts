// eslint-disable-next-line no-unused-vars
import React, { Suspense } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Navbar/>
      <Suspense fallback={<h1>Loading...</h1>}>
      <Outlet/>
      </Suspense>
    </div>
  )
}

export default Layout