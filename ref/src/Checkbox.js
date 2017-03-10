import React from 'react';


class Checkbox extends React.Component{
  constructor(){
    super();
    this.state={
      checkboxValue:['apple']
    }
  }
  handleChange(){
    let ckValue=this.state.checkboxValue();
    let nowCheck=e.target.value;

    let index=ckValue.findIndex(element=>element===nowCheck);
    if(index===-1){
      ckValue.push(nowCheck);
    }else{
      ckValue.splice(index,1);
    }
    this.setState({checkboxValue:ckValue});
  }
  render(){
    return(
      <div>
        <input type="Checkbox" value='apple' name='fruits' onChange={this.handleChange.bind(this)} defaultChecked />苹果
        <input type="Checkbox" value='banana' name='fruits' onChange={this.handleChange.bind(this)} defaultChecked />香蕉
        <input type="Checkbox" value='pear' name='fruits' onChange={this.handleChange.bind(this)} defaultChecked />梨子
      </div>
    )
  }
}
export default Checkbox;
