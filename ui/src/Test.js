import React from 'react';
import {browserHistory} from 'react-router'

class Test extends React.Component{
  handleClick(){
    browserHistory.push('/')
  }
  render(){
    console.log(this.context.router)
    return(
      <div>
        <button onClick={this.handleClick.bind(this)}>fanhuishouye</button>
      </div>
    )
  }
}
Test.contextTypes = {
  router: React.PropTypes.string
}

export default Test;
