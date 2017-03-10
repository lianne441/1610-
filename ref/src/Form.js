import React from 'react';


class From extends React.Component{
  constructor(){
    super();
    inputVlaue:'';
    select:'3';
    radio:'male'
  }
  handleSubmit(e){
    e.preventDefault();
    console.log('aaaa');
    this.refs.form.reset();
  }
  handleChange(e){
    console.log(e.target.value);
    this.setState({inputValue:e.target.value});
  }
  handleTextarea(e){
    this.setState({textarea:e.target.value});
  }
  componentDidMount(){
     document.getElementById('Input').change=function(e){

     }
  }
  select(e){
    this.setState({})
  }
  render(){
    return(
      <div>
          <form onSubmit={this.handleSubmit.bind(this)} Method='POST'>
              <input type='radio' name='test' defaultValue='1245' ref='input' value="male"
                onChange={e=>console.log(e.target.value)} checked={this.state.radio==='male'?true:false} />男
              <input type='radio' name='test' defaultValue='1245' ref='input' value='famale'
                onChange={(e)=>this.setState({radio:e.target.value})} checked={this.state.radio==='famale'?true:false}
               />女
              <Checkbox />
               <br />
              <textarea value={this.state.textarea} onChange={this.handleTextarea.bind(this)} />
              <button>提交</button>
              <button type='button'>普通</button>
              <button type='reset'>重设</button>
              <select value={this.state.select} onChange={this.select.bind(this)}>
                 <option  value="1">1</option>
                 <option  value="2">2</option>
                 <option  value="3">3</option>
                 <option  value="4">4</option>
              </select>
          </form>
      </div>
    )
  }
}
export default From;
