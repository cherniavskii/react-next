import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { compose } from 'redux';
import Header from '../components/Header';
import withRoot from '../src/withRoot';
import withRedux from '../src/withRedux';
import { selectors as moviesSelectors, actions as moviesActions } from '../ducks/movies';

const Movie = ({ movie }) => (
  <div>
    <Header />
    <Card>
      <CardHeader
        title={movie.title}
      />
      <CardMedia
        component="img"
        style={{ width: 'auto' }}
        src={movie.poster}
        title="poster"
      />
      <CardContent>
        <Typography component="p">
          {movie.description}
        </Typography>
      </CardContent>
    </Card>
  </div>
);

Movie.getInitialProps = ({ store, query }) => {
  const movieData = moviesSelectors.getMovie(store.getState(), query.id);
  if (!movieData) {
    store.dispatch(moviesActions.fetchMovies());
  }
  return {
    movie: movieData || {},
    id: query.id,
  };
};

Movie.propTypes = {
  movie: PropTypes.shape({}),
};

Movie.defaultProps = {
  movie: {},
};

const mapStateToProps = (state, ownProps) => ({
  movie: moviesSelectors.getMovie(state, ownProps.id),
});

export default compose(
  withRedux(mapStateToProps),
  withRoot,
)(Movie);
