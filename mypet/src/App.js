// App.js
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { observer } from 'mobx-react'
import themeStore from './stores/ThemeStore'
import { AppBar, Button, Container, Toolbar, Typography, useMediaQuery } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Home from './views/Home'
import About from './views/About'
import SignInSide from './views/SignInSide'

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  
  const theme = React.useMemo(
    function() {
      return createTheme({
        palette: {
          mode: themeStore.theme === 'dark' || prefersDarkMode ? 'dark' : 'light',
        },
      });
    },
    [prefersDarkMode, themeStore.theme]
  )
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              HappyDog!
            </Typography>
            <Button color="inherit" onClick={function() { themeStore.toggleTheme(); }}>
              Toggle Theme
            </Button>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/signin">Sign In</Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/about" element={
            <Container>
              <About />
            </Container>
          }/>
          <Route path="/signin" element={<SignInSide />} />
          <Route path="/" element={
            <Container>
              <Home />
            </Container>
          } exact />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default observer(App);
