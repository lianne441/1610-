import React from 'react';


class Test extends React.Component{
  constructor(){
    super();
    this.state={divH:50}
  }
  render(){
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}
export default Test;
