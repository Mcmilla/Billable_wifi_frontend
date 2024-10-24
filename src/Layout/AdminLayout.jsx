import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';  // Your sidebar component
import HorizontalBar from './HorizontalBar';  // Horizontal bar (header) for the admin section
import { Box } from '@mui/material';


const AdminLayout = () => {
  
  return (
    <Box style={{ display: 'flex'}} sx={{height:'100vh', margin:0, padding:0}}>
      {/* Sidebar remains visible across admin pages */}
      <Sidebar /> 
      
      {/* Main content area for the admin pages */}
      <Box position='relative' style={{ flexGrow: 1 }} sx={{ flexDirection:'row'}}>
        {/* Horizontal Bar at the top */}
        <HorizontalBar />
        
        {/* Render the nested admin routes below the horizontal bar */}
        <Box style={{flexGrow:1}} marginTop={10}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;
