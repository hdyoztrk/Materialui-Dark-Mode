import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./components/Navbar";
import AddPost from "./components/AddPost";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: { mode: mode, },
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}  >
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
