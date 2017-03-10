import React from 'react';

import Btn from './Btn';
import Card from './Card';
import  './main.css';


class App extends React.Component{
  constructor(){
    super();
    this.state={divH:50}
  }

  handleWheel(e){
    console.log(e.detalY)
    if(this.state.divH<50){
      this.setState({divH:100})
    }else{
      this.setState({divH:this.state.divH+e.deltaY})
    }
  }
  handleCheck(e){
    console.log(e.target.value)
  }
  handleMenu(e){
    e.preventDefault();
    console.log('你点击了右键')
  }
  render(){
    return(
      <div>
        <div style={{height:`${this.state.divH}px`,background:'#666'}} onWheel={this.handleWheel.bind(this)}
          onContextMenu={this.handleMenu.bind(this)}></div>
      </div>
    )
  }
}
export default App;
