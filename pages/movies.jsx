import React from 'react';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { compose } from 'redux';
import Header from '../components/Header';
import withRoot from '../src/withRoot';
import withRedux from '../src/withRedux';
import { selectors as moviesSelectors, actions as moviesActions } from '../ducks/movies';

const Movies = ({ movies }) => (
  <div>
    <Header />
    <List>
      {movies.map(movie => (
        <ListItem key={movie.id} dense button>
          <ListItemText primary={movie.title} secondary={movie.description} />
        </ListItem>
      ))}
    </List>
  </div>
);

Movies.getInitialProps = (initialProps) => {
  initialProps.store.dispatch(moviesActions.fetchMovies());
  return {};
};

Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({})),
};

Movies.defaultProps = {
  movies: [],
};

const mapStateToProps = state => ({
  movies: moviesSelectors.getMovies(state),
});

export default compose(
  withRedux(mapStateToProps),
  withRoot,
)(Movies);
