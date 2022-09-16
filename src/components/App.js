import React from 'react';
import { Routes, BrowserRouter as Router,
  Route } from 'react-router-dom';
import { About, Home, NoMatch, DynamicPage } from './components/index'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/dynamic" element={<DynamicPage/>} />
          <Route exact path="/about" element={<About/>} />
          <Route path="*" element={<NoMatch/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;