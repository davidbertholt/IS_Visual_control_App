import { AppBar, Box, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const NavBarComponent = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                        IS Visual Control App
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBarComponent
