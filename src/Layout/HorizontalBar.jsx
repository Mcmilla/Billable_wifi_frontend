import React from 'react'
import { Avatar, Box, Card, CardContent, IconButton, Typography } from '@mui/material'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

import { useThemeContext } from '../contexts/ThemeContext';
import Profile from './Profile';

import jane from '../images/jane.jpg'



const HorizontalBar = () => {

  const {isDarkMode, toggleTheme}=useThemeContext()
  return (
    <Box position='absolute' display='flex'  alignItems='center' right={20} maxWidth={500}>

      <IconButton onClick={toggleTheme}>
        {isDarkMode ?<DarkModeOutlinedIcon/> : <LightModeOutlinedIcon/> }
      </IconButton>
      <Profile name=' john doe' description='admin' avatarUrl={jane}/>




      

    </Box>
  )
}

export default HorizontalBar


