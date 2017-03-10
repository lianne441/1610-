import React from 'react';

import Son from './Son';
import Test from './Test'

class Children extends React.Component{
  constructor(){
    super();
    this.state={divH:50}
  }
  render(){
    return(
      <div>
        aaaa
        <Son name="aa">
          <Test />
          <Test />
          <Test />
          <Test />
        </Son>
      </div>
    )
  }
}
export default Children;
