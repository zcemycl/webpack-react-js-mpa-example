import React from 'react';
import { Icon, Header } from 'semantic-ui-react';

// import { Layout } from '..';

const NoMatch = () => {
  return (
    <>
      <Icon name="minus circle" size="big" />
      <strong>Page not found!</strong>
    </>
  );
};

export default NoMatch;