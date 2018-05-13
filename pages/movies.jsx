import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Header from '../components/Header';
import withRoot from '../src/withRoot';

const Movies = ({ movies = [] }) => (
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

export default withRoot(Movies);
