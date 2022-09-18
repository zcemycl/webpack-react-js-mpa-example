import React, {useState} from 'react';

const Home = () => {
  const [arr,setArr] = useState([]);
  return (
    <>
      <p>Hello World of React and Webpack!</p>
      <button type="button" onClick={()=>
          setArr(prev=>
          [...prev, 
          Math.floor(Math.random() * 100) + 1])}>Click Me!!!</button>
      <p data-testid="numlist">{arr.join(',')}</p>
    </>
  );
};

export default Home;