import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import { dataList } from '../data';

const Sidebar = ({ mode, setMode }) => {
    return (
        <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position='fixed'>
                {dataList.map((dt, i) =>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href='#home'>
                                <ListItemIcon>
                                    {dt.img}
                                </ListItemIcon>
                                {dt.id === 8 ? <Switch onChange={e => setMode(mode === "light" ? "dark" : "light")} /> : <ListItemText primary={dt.name} />}
                            </ListItemButton>
                        </ListItem>
                    </List>
                )}
            </Box>
        </Box>
    )
}

export default Sidebar
