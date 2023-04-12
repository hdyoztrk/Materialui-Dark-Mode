import { Box } from '@mui/material'
import React from 'react'
import SharedPosts from './SharedPosts'
const Feed = () => {
    return (
        <Box flex={4} p={2}>
            <SharedPosts />
            <SharedPosts />
            <SharedPosts />
            <SharedPosts />
            <SharedPosts />
        </Box>
    )
}

export default Feed