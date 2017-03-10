import React from 'react';

class Logo extends React.Component{
    render(){
      let styles={
        fontSize:"20px",
        width:"100%",
        height:"50px",
        display:"block",
        backgroundColor:"black",
        color:"white"
      }
      return (
      <span style={styles} className="logo">project name</span>
      )
    }
  }

export default Logo;
