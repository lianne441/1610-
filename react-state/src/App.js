import React from 'react';

let data=[
  "第一条信息",
  "第二条信息",
  "hello world",
  "第四条信息"
]
class App extends React.Component{
  constructor(){
    super();
    this.state={
       text:data
    }
  }

  render(){
    let content=this.state.text.map(
      item=><div　key={Math.random()}><p>今天的消息是：{item}</p><button>删除</button></div>
    )
    return (
      <div>
        {content}
      </div>
    )
  }
}

export default App;
