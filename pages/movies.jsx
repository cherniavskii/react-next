import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { compose } from 'redux';
import Link from 'next/link';
import Header from '../components/Header';
import withRoot from '../src/withRoot';
import withRedux from '../src/withRedux';
import { selectors as moviesSelectors, actions as moviesActions } from '../ducks/movies';

const Movies = ({ movies }) => (
  <div>
    <Header />
    <List>
      {movies.map(movie => (
        <Link href={`/movie?id=${movie.id}`} passHref key={movie.id}>
          <ListItem dense button component="a">
            <ListItemText primary={movie.title} secondary={movie.description} />
          </ListItem>
        </Link>
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
