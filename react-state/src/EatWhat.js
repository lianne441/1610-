import React from 'react';

let data=['白菜','胡萝卜','油菜','空心菜','卷心菜','豆芽']
class EatWhat extends React.Component{
  constructor(){
    super();
    this.state={
       start:false,
       data,
       text:""
    }
  }
 select(){
    this.setState({text:this.state.data[Math.floor(Math.random()*this.state.data.length)]})
  }
  handleClick(){
    if(this.state.start){
      clearInterval(this.interval);
       this.setState({start:false})
    }else{
      this.interval=setInterval(()=>this.select(), 500);
      this.setState({start:true})
    }

  }
  render(){
    return (
      <div style={{width:"100%",marginLeft:"500px",marginTop:"200px"}}>
        <p style={{color:"red",fontSize:"20px"}}>我猜你想吃：{this.state.text}</p>
      　<button　onClick={this.handleClick.bind(this)} style={{fontSize:"20px"}}>{this.state.start?"停止":"开始"}</button>
      </div>
    )
  }
}

export default EatWhat;
