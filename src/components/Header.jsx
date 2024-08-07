import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Weather from '../pages/Weather/Weather';
import News from '../pages/News/News';
import Home from '../pages/Home/Home';

const drawerWidth = 240;

const links = [
  { id: 1, label: 'Home', link: '/' },
  { id: 2, label: 'News', link: '/news' },
  { id: 3, label: 'Weather', link: '/weather' },
];

function Header() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <AppBar
          position="fixed"
          sx={{
            width: open ? `calc(100% - ${drawerWidth}px)` : '100%',
            ml: open ? `${drawerWidth}px` : 0,
            transition: (theme) =>
              theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
              }),
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              HOME
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', p: 1 }}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </Box>
          <List>
            {links.map((link) => (
              <ListItem button key={link.id} component={Link} to={link.link}>
                <ListItemText primary={link.label} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Box
  component="main"
  sx={{
    flexGrow: 1,
    p: 3,
    transition: (theme) =>
      theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    ...(open && {
      transition: (theme) =>
        theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      marginLeft: `${drawerWidth}px`,
    }),
  }}
>
          <Toolbar /> {/* This toolbar is for spacing */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/weather" element={<Weather />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default Header;
