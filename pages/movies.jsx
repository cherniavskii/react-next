import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { compose } from 'redux';
import Header from '../components/Header';
import withRoot from '../src/withRoot';
import withRedux from '../src/withRedux';
import { selectors as moviesSelectors, actions as moviesActions } from '../ducks/movies';

const Movies = ({ fetchMovies, movies = [] }) => (
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

const mapStateToProps = state => ({
  movies: moviesSelectors.getMovies(state),
});

export default compose(
  withRedux(mapStateToProps),
  withRoot,
)(Movies);
