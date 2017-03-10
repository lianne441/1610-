import React from 'react';


class Lunbo extends React.Component{
  constructor(){
    super();
    this.state={
      num:0
    }
  }
  render(){
    let styles={
      width:"400px",
      height:"450px",
      border:'10px solid red',
      color:'#fff',
      fontSize:"25px",
      overflow:"hidden"
    }
    let zhi={
      leftBtn:{
        marginLeft:`${this.state.num+390}px`,
        float:"left"

      },
      rightBtn:{
          marginLeft:`${this.state.num-390}px`,
          float:"left"
      }
    }
  return(
      <div style={styles}>
         <div className="show" style={{marginLeft:`${this.state.num+390}px`}}>
             <img src="http://www.ruanyifeng.com/images_pub/pub_101.jpg" className="img" />
             <img src="http://www.ruanyifeng.com/images_pub/pub_321.jpg" className="img" />
             <img src="http://www.ruanyifeng.com/images_pub/pub_125.jpg" className="img" />
             <img src="http://www.ruanyifeng.com/images_pub/pub_348.jpg" className="img" />
         </div>
        <button style={zhi.rightBtn}>right</button>
        <button style={zhi.leftBtn}>left</button>
      </div>
    )
  }
}

export default Lunbo;
