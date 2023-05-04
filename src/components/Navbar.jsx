import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import CodeIcon from '@mui/icons-material/Code';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyleToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0px 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center", gap: "20px",
    [theme.breakpoints.up("sm")]: { display: "flex" }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex", alignItems: "center", gap: "10px",
    [theme.breakpoints.up("sm")]: { display: "none" }
}))

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position='sticky'>
            <StyleToolbar>
                <Typography variant='h5' sx={{ display: { xs: "none", sm: "block" } }}>Logo</Typography>
                <CodeIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <Search ><InputBase placeholder='Search...' /></Search>
                <Icons>
                    <Badge badgeContent={1} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <NotificationsIcon />
                    </Badge>
                    <Avatar onClick={e => setOpen(true)} sx={{ width: 30, height: 30, bgcolor: "#d1c4e9" }}>A</Avatar>
                </Icons>
                <UserBox onClick={e => setOpen(true)}>
                    <Avatar sx={{ width: 30, height: 30, bgcolor: "#d1c4e9" }}>A</Avatar>
                    <Typography mr={2}>User</Typography>
                </UserBox>
            </StyleToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar