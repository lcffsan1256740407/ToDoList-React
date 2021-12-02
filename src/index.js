import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


// 入口文件
// <React.StrictMode> 和严格模式无关 这个是可以检测组件里不合理的地方

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

