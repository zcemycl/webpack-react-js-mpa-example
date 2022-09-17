import React, {Suspense, lazy} from 'react';
import { Routes, BrowserRouter as Router,
  Route } from 'react-router-dom';
import { Home } from './components'

const AsyncDynamicPage = lazy(
  () => import(/* webpackChunkName:'DynamicPage' */ './components/DynamicPage/DynamicPage')
);
const AsyncNoMatch = lazy(
  () => import(/* webpackChunkName:'NoMatch' */ './components/NoMatch/NoMatch')
);
const AsyncAbout = lazy(
  () => import(/* webpackChunkName:'About' */ './components/About/About')
);

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading ...</div>}>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/dynamic" element={<AsyncDynamicPage/>} />
          <Route exact path="/about" element={<AsyncAbout/>} />
          <Route path="*" element={<AsyncNoMatch/>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;