
import React from 'react'
import {Route, 
  createBrowserRouter, 
  createRoutesFromElements,
   RouterProvider
  } from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoungPage from './pages/NotFoungPage';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage />}/>
      <Route path='/jobs' element={<JobsPage />}/>
      <Route path='*' element={<NotFoungPage />}/>
    </Route>
  )
);


const App = () => {

  return (
    <RouterProvider router={router}/>
    // <div>
    //   <Navbar />
    //   <Hero title="Test Tile" subtitle="This is the subtitle"/>

    //   <HomeCards />
    //   <JobListings />
    //   <ViewAllJobs />
    // </div>
  )
}

export default App;