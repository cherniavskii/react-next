import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';
import withRoot from '../src/withRoot';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
};

const Index = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" className={classes.flex}>
          React-next
        </Typography>
      </Toolbar>
    </AppBar>
    <Typography className={classes.content} variant="subheading">
      You can edit <code>pages/index.js</code> now and app will automatically refresh :)
    </Typography>
  </div>
);

Index.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withRoot(withStyles(styles)(Index));
