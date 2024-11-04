import { Typography } from '@mui/material'
import React from 'react'
import { Avatar, Box, CardContent} from '@mui/material'


const Profile = ({name, description, avatarUrl}) => {
  return (
    <Box  style={{ maxWidth: 300}}>
    <CardContent style={{display:'flex', alignItems:'center'}}>
      <Avatar src={avatarUrl} alt={name} />

      <Box>
        <Typography>{name}</Typography>
        <Typography>{description}</Typography>

      </Box>

    </CardContent>

  </Box>
  )
}

export default Profile