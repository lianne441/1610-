import React from 'react';

import Btn from './Btn';
import Card from './Card';
import  './main.css';

let data=[
  {index:1,title:'标题一',date:'2017.1.1'},
  {index:2,title:'标题二',date:'2017.1.2'},
  {index:3,title:'标题三',date:'2017.1.3'}
]
class App extends React.Component{
  constructor(){
    super();
    this.state={data:data,num:0}
  }
  addNum(val){
    this.setState({num:this.state.num+val})
  }
  render(){
    return(
      <div>
        {/* {this.state.data.map(item =><Card key={Math.random()} title={item.title} index={sitem.index} date={item.date} />)} */}
        {this.state.data.map(item => <Card key={Math.random()} {...item} />)}
        数值是：{this.state.num}<br />
        <Btn bg="pink" fatherClick={this.addNum.bind(this)} title="加５"　num={5}> </Btn>
        <Btn bg="pink" fatherClick={this.addNum.bind(this)} title="减10"　num={-10}> </Btn>
      </div>
    )
  }
}
export default App;
