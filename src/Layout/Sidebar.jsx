// this is where we join the two horizontal and sidebar 
import React, { useState } from 'react'

import MenuItems from './MenuItems'
import MenuOutlined from '@mui/icons-material/MenuOutlined'
import { Box, IconButton  } from '@mui/material'
// import { Height } from '@mui/icons-material'
// import styled from 'styled-components'
// import useTheme from '@mui/material'
// import { useThemeContext } from '../contexts/ThemeContext'






const Sidebar= () => {
    const [isCollapsed, setIscollapsed]=useState(false)

    const [activeItem, setActiveItem]=useState(null)

    // const StyledDrawer =styled(Drawer)({
    
    // })

    
    
    
 

  

    

     

    const toggleCollapse=()=>{
      setIscollapsed(!isCollapsed)
      console.log('toggle button is clicked ')
    }

    const handleItemClick=(id)=>{
      setActiveItem(id)
    }
  return (
    <Box
    isCollapsed={isCollapsed}
    sx={{
      width:isCollapsed?80:300,
      transition:'width 0.3s',
      backgroundColor:'#fff',
      padding:0,
      margin:0,
      borderTopRightRadius:15,
      
      
      

    }}
    style={{display:'flex', flexDirection:'column',}}
    >

      <Box display='flex'  justifyContent='space-between' alignItems='center' >
        
      <IconButton onClick={toggleCollapse}>
        <MenuOutlined/>
        </IconButton>

      </Box>

       

      

      <MenuItems 
      iscollapsed={isCollapsed}
      activeItem={activeItem}
      handleItemClick={handleItemClick}

      
      
      />
      

     


    </Box>




    
    

   
  )
}

export default Sidebar