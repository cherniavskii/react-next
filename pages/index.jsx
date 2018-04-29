import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';
import withRoot from '../src/withRoot';
import withRedux from '../src/withRedux';
import { actions, selectors } from '../ducks/counter';

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

const Index = ({
  classes, count, add, subtract, reset,
}) => (
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
    <div className={classes.content}>
      <Typography variant="subheading">
        You can edit <code>pages/index.js</code> now and app will automatically refresh :)
      </Typography>
      <div>
        <Typography>Count: {count}</Typography>
      </div>
      <Button onClick={add}>Add</Button>
      <Button onClick={subtract}>Subtract</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  </div>
);

Index.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  count: PropTypes.number.isRequired,
  add: PropTypes.func.isRequired,
  subtract: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  count: selectors.getCount(state),
});

const mapDispatchToProps = dispatch => ({
  add: () => dispatch(actions.add()),
  subtract: () => dispatch(actions.subtract()),
  reset: () => dispatch(actions.reset()),
});

export default compose(
  withRedux(mapStateToProps, mapDispatchToProps),
  withRoot,
  withStyles(styles),
)(Index);
