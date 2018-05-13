import React from 'react';
import Button from 'material-ui/Button';
import Link from 'next/link';
import Header from '../components/Header';
import withRoot from '../src/withRoot';

const About = () => (
  <div>
    <Header />
    <div style={{ padding: '16px' }}>
      <Link href="/" passHref>
        <Button component="a" variant="raised" color="primary">Home</Button>
      </Link>
    </div>
  </div>
);

export default withRoot(About);
