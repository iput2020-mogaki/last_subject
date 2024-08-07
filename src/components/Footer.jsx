import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          top: 'auto',
          bottom: 0,
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            HOME
          </Typography>
        </Toolbar>
        <IconButton color="inherit" href="https://twitter.com/your_profile" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </IconButton>
          <Typography variant="body1" noWrap component="div" sx={{ ml: 2 }}>
            Contact: tomoya.mogaki@nsw.co.jp
          </Typography>
      </AppBar>
    </Box>
  );
}

export default Footer;
