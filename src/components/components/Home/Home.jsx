import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {Layout} from '..';

const Home = () => {
  const [arr,setArr] = useState([]);
  return (
    <Layout>
      <p>Hello World of React and Webpack!</p>
      <ul style={{listStyleType: 'none'}}>
        <li><Link to="/dynamic">Navigate to Dynamic Page{'\n'}</Link></li>
        <li><Link to="/about">Navigate to About Page</Link></li>
      </ul>
      <button onClick={()=>
          setArr(prev=>
          [...prev, 
          Math.floor(Math.random() * 100) + 1])}>Click Me!!!</button>
      <p>{arr.join(',')}</p>
    </Layout>
  );
};

export default Home;