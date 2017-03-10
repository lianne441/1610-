import React from 'react';


class Trans extends React.Component{
  constructor(){
    super();
    this.state={
       show:true
    }
  }
  handleClick(){
    this.setState({show:!this.state.show})
  }
  render(){
    let styles={
      top:this.state.show　?"30%":"5%",
      height:this.state.show ? "40vh":"5vh"
    }
    return (
    <div className="container" style={styles}>
       <button onClick={this.handleClick.bind(this)} style={{float:"right",marginRight:"2vh",display:"block"}}>{this.state.show　?"上":"下"}</button>
       <a style={{marginTop:"10vh",display:"block"}} href="https://www.baidu.com/?tn=02049043_42_pg&ch=6s">博客标题</a><hr />
       <a>博客标题</a><hr />
       <a>博客标题</a><hr />
       <p >blog</p>

    </div>
    )
  }
}

export default Trans;
