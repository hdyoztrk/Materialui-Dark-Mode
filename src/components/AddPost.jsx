import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';

const StyleModel = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
});

const AddPost = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Tooltip onClick={() => setOpen(true)} title="create" sx={{ position: "fixed", bottom: "8%", left: { xs: "calc(50% - 25px)", md: 30 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyleModel
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={"29%"} height={"35%"} bgcolor={"background.default"} color={"text.primary"} p={5} borderRadius={8} >
                    <Typography variant="h6" color="gray" textAlign="center">
                        Create post
                    </Typography>
                    <UserBox>
                        <Avatar
                            src="https://material-ui.com/static/images/avatar/4.jpg"
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography fontWeight={500} variant="span">
                            Nancy Mondroe
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={2}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={2} mt={2} mb={3}>
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color="error" />
                    </Stack>
                    <ButtonGroup
                        fullWidth
                        variant="contained"
                        aria-label="outlined primary button group"
                    >
                        <Button>Post</Button>
                        <Button sx={{ width: "100px" }}>
                            <DateRange />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyleModel>
        </>
    )
}

export default AddPost