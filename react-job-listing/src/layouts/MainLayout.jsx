

import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    // Renders the child under MAIN LAYOUT if there is one
    <>
        <Navbar />
        <Outlet />
    </>
    
    
  )
}

export default MainLayout