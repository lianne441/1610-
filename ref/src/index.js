import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Children from './Children';
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
      <Children />
   </div>,
  document.getElementById("app")
)

let arr=[5,8,66,89,23];
function find(arr,num){
   let index=arr.findIndex(element=>element>num);
   if(index===1){
     return arr;
   }else{
     arr.splice(index,1);
     find(arr);
   }
}
