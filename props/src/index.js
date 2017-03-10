import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
// import Card from './Card';
import  './main.css';

class Test extends React.Component{
  handleClick(){
    console.log('aaaa')
  }
  render(){
    return(
      <div>
        <button onClick={ () => console.log("aaa")}>Click</button>
      </div>
    )
  }
}
ReactDOM.render(
    <div>
      <App />
   </div>,
  document.getElementById("app")
)
