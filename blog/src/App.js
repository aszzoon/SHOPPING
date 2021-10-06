import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = 'MLB'

  return (
    <div className="App">
      <div className="black-nav">
        <div style={ { color : 'black', fontSize : 30} } >프론트엔드 개발자</div>
      </div>
      <h1> { posts } </h1>
    </div>
  );
}

export default App;
