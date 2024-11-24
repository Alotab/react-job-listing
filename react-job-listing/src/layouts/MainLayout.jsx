

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    // Renders the child under MAIN LAYOUT if there is one
    <>
        <Navbar />
        <Outlet />
        <ToastContainer />
    </>
    
    
  )
}

export default MainLayout