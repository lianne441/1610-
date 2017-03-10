import React from 'react';


class Btn extends React.Component{
  handleClick(){
    this.props.fatherClick(this.props.num)
  }
  render(){
    let styles={
      padding:`${this.props.padd}px`,
      backgroundColor:this.props.bg,
      border:'10px solid red',
      color:'#fff',
      fontSize:"25px"
    }
    return(
      <div>
        <p>我是子组件的button</p>
        <button style={styles} onClick={this.handleClick.bind(this)}>
           {this.props.title}
        </button>
      </div>
    )
  }
}
Btn.defaultProps={
  title:'defaultTitle',
  bg:'#00bcd4',
  padd:10
};
Btn.propTypes={
  title: React.PropTypes.string,
  bg: React.PropTypes.string,
  padd: React.PropTypes.number,
  fatherClick:React.PropTypes.func.isRequired
}
export default Btn;
