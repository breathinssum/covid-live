// React 최초 실행 지점

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> //리액트라우터의 컴포넌트
      <App /> //프로젝트 앱 파일
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root') 
  // public 폴더에 있는 index.html의<div id="root"></div> 태그
  // 아래에 리액트 앱을 실행
);