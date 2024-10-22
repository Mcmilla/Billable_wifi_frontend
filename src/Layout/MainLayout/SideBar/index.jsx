// this is where we join the two horizontal and sidebar 
import React, { useState } from 'react'

import MenuItems from '../MenuItems'
import { Menu } from '@mui/icons-material'
import { Drawer, IconButton } from '@mui/material'


const SideBar= () => {
    const [isCollapsed, setIscollapsed]=useState(false)

    const [activeItem, setActiveItem]=useState(null)
     

    const toggleCollapse=()=>{
      setIscollapsed(!isCollapsed)
    }

    const handleItemClick=(id)=>{
      setActiveItem(id)
    }
  return (
    <Drawer 
    variant='permanent'
    sx={{
      width:isCollapsed?80:240,
      transition:'width 0.3s',

    }}
    
    >

        <IconButton onClick={toggleCollapse}><Menu/></IconButton>

      

      <MenuItems 
      isCollapsed={isCollapsed}
      activeItem={activeItem}
      handleItemClick={handleItemClick}

      
      
      />

     


    </Drawer>




    
    

   
  )
}

export default SideBar