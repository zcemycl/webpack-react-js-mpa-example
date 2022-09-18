import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

const Layout = ({ children }) => {
  return (
    <Container>
      <Link to="/">
        <Header as="h1">
          webpack-for-react
        </Header>
      </Link>
      <ul style={{listStyleType: 'none'}}>
        <li><Link to="/dynamic">Navigate to Dynamic Page</Link></li>
        <li><Link to="/about">Navigate to About Page</Link></li>
      </ul>
      {children}
      <Divider />
      <p>
        Made with <Icon name="heart" color="red" /> by Leo Leung
      </p>
    </Container>
  );
};

export default Layout;