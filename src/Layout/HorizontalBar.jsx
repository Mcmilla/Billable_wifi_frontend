import React from 'react'
import { Box, IconButton } from '@mui/material'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const HorizontalBar = () => {
  return (
    <Box position='absolute' display='flex'  justifyContent='flex-end'>

      <IconButton>
        <LightModeOutlinedIcon/>
        <DarkModeOutlinedIcon/>


      </IconButton>
      



    </Box>
  )
}

export default HorizontalBar


