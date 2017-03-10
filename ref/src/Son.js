import React from 'react';


class Son extends React.Component{
  constructor(){
    super();
    this.state={divH:50}
  }
  render(){
    console.log(this.props.Children);
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}
export default Son;
