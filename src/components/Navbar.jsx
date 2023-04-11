import { AppBar, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'
import CodeIcon from '@mui/icons-material/Code';

const StyleToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Navbar = () => {
    return (
        <AppBar position='stick'>
            <StyleToolbar>
                <Typography variant='h5' sx={{ display: { xs: "none", sm: "block" } }}>Logo</Typography>
                <CodeIcon sx={{ display: { xs: "block", sm: "none" } }} />
            </StyleToolbar>
        </AppBar>
    )
}

export default Navbar