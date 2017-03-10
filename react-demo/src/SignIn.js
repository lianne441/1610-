import React from 'react';


class SignIn extends React.Component{
    getStyles(){
      return {
        float:"left",border:"1px solid #000"
      }
    }

    render(){
      let color=1;
      let styles={
        leftBtn:{
          background:color?"brown":"yellow"
        },
        rightBtn:{
            background:"blue"
        }
      }
      return (
        <div style={this.getStyles()}>
          <input type="text" placeholder="aaa" />
          <input type="text" placeholder="sign" />
          <button>sign</button>
        </div>
      )
    }
  }

export default SignIn;
