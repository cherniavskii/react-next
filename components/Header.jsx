import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import Link from 'next/link';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Link href="/" passHref>
        <IconButton color="inherit" aria-label="Home" component="a">
          <HomeIcon />
        </IconButton>
      </Link>
      <Typography variant="title" color="inherit" style={{ flex: 1 }}>
        React-next
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
