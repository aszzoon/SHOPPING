import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목,글제목변경] = useState('남자 코트 추천');

  let posts = '강남고기맛집';
  return (
    <div className="App">
      <div className="black-nav">
        <div>프론트엔드 개발자</div>
      </div>
      <div className="list">
      <h1> { 글제목 } </h1>
      <p>2월 17일 발행</p>
      <hr/>
      </div>
    </div>
  );
}

export default App;
