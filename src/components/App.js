import React, {Suspense, lazy} from 'react';
import { Routes, BrowserRouter as Router,
  Route } from 'react-router-dom';

const Home = lazy(() => import('./components/Home/Home'))
const DynamicPage = lazy(() => import('./components/DynamicPage/DynamicPage'));
const NoMatch = lazy(() => import('./components/NoMatch/NoMatch'));
const About = lazy(() => import('./components/About/About'));

const App = ({ basename="/" }) => {
  return (
    <Router basename={basename}>
      <Suspense fallback={<div>Loading ...</div>}>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/dynamic" element={<DynamicPage/>} />
          <Route exact path="/about" element={<About/>} />
          <Route path="*" element={<NoMatch/>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;