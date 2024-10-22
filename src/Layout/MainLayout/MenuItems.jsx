import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react'
import { Home,Dashboard } from '@mui/icons-material';


const MenuItems = ({activeItem,handleItemClick,iscollapsed}) => {
    const menuItems = [
        {
          id: 1,
          title: 'Home',
          path: '/home',
          icon: <Home />
        },
        {
          id: 2,
          title: 'Dashboard',
          path: '/dashboard',
          icon: <Dashboard />
        }
      ];

  return (
    <List>
        {menuItems.map((item)=>(
            <ListItemButton
            key={item.id}
            selected={activeItem===item.id}
            onClick={()=>handleItemClick(item.id)}
            >
                <ListItemIcon>{item.icon}</ListItemIcon>
                {!iscollapsed && <ListItemText primary={item.title}/>}

            </ListItemButton>
        ))

        }
    </List>
  )
}

export default MenuItems