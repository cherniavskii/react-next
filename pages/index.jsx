import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Divider from 'material-ui/Divider';
import Link from 'next/link';
import Header from '../components/Header';
import withRoot from '../src/withRoot';
import withRedux from '../src/withRedux';
import { actions, selectors } from '../ducks/counter';

const styles = {
  content: {
    padding: 16,
  },
};

const Index = ({
  classes, count, add, subtract, reset,
}) => (
  <div>
    <Header />
    <div className={classes.content}>
      <Typography variant="subheading">
        You can edit <code>pages/index.js</code> now and app will automatically refresh :)
      </Typography>
      <Link href="/about" passHref>
        <Button component="a" variant="raised" color="primary">About</Button>
      </Link>
      <Link href="/movies" passHref>
        <Button component="a" variant="raised" color="primary">Movies</Button>
      </Link>
      <Divider />
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
