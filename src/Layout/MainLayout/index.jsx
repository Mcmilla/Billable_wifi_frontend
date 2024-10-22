// so here we are going to render the sidebar and the appbar and the main content 

import Sidebar from './SideBar'
import HorizontalBar from './HorizontalBar'
import { Outlet } from 'react-router-dom'


import React from 'react'
import { Box } from '@mui/material'

const MainLayout=()=>{
  <Box display='flex'>
    <Sidebar/>

    

    <HorizontalBar/>

    <main>
      <Outlet/>
      
    </main>

  </Box>

}

export default MainLayout




