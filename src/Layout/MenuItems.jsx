import { List, ListItemButton, ListItemIcon, ListItemText ,Box} from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useThemeContext } from '../contexts/ThemeContext';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';



const MenuItems = ({activeItem,handleItemClick,iscollapsed}) => {
  const navigate=useNavigate()
  const {isDarkMode,toggleTheme}=useThemeContext()


    const menuItems = [
        {
          id: 1,
          title: 'Default',
          path: 'dashboard',
          icon: <HomeOutlinedIcon />
        },
        {
          id: 2,
          title: 'Dashboard',
          path: 'dashboard',
          icon: <DashboardOutlinedIcon />
        },
        {
          id: 3,
          title: 'users',
          path: 'users',
          icon: <PeopleOutlinedIcon />
        },
        {
          id: 4,
          title: 'vendors',
          path: 'vendors',
          icon: <ThumbUpOutlinedIcon/>
        },
        {
          id: 2,
          title: 'Access Codes',
          path: 'access-codes',
          icon: <VpnKeyOutlinedIcon/>
        },
      ];

  return (
    <List
    
    >
        {menuItems.map((item)=>(
            <ListItemButton
            key={item.id}
            selected={activeItem===item.id}
            onClick={()=>{
              handleItemClick(item.id)
              navigate(item.path)} }

              
           
           
            >
              <Box sx={{
                  
                  '&:hover' :{
                    backgroundColor:isDarkMode ? "#00b4d8": ""

                  },
                  '&:active':{
                    backgroundColor:isDarkMode ? "#03045e": ""

                  },
                  display:'flex',
                  marginTop:5,
                  borderRadius:12

                }}>
              <ListItemIcon>{item.icon}</ListItemIcon>
                {!iscollapsed && <ListItemText primary={item.title}
                 
                 
                 />}
              </Box>
           

            </ListItemButton>
        ))

        }
    </List>
  )
}

export default MenuItems