
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
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';






// remove the loader if you dont want to use the jobloader from react-dom


const App = () => {

  // ADD NEW JOB
  // this function add the newly created job object to the database/job.json file.
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return;
  };

  //DELETE JOB
  const deleteJob = async (id) => {

  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage />}/>
        <Route path='/jobs' element={<JobsPage />}/>
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
        <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob }/>} loader={jobLoader}/>  
        <Route path='*' element={<NotFoungPage />}/>
      </Route>
    )
  );

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