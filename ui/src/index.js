import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';
import Slider from './Slider';
import Material from './Material';
import Antd from './Antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import './main.css';

//这是material的ui，必须有一下两行
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


ReactDOM.render(
    <div>
      <Antd />
   </div>,
  document.getElementById("app")
)
