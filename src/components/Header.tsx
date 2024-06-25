import { Box} from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Box  display='flex' flexDirection='column' alignItems={"center"} justifyContent={"center"} paddingX='3rem'  maxWidth="sm" > 
      <h1>Welcome To Carbooking </h1>
    </Box>
  )
}

export default Header
