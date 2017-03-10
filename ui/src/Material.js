import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import Phone from 'material-ui/svg-icons/communication/phone';

class Material extends React.Component{
  render(){
    const iconStyles = {
      marginRight: 24,
    };
    return(
      <div>
        <MuiThemeProvider>
          <div>
            <RaisedButton label='Default' primary={true}/>
            <RaisedButton label='提交' primary={true}/>
            <AppBar　title="Title"　iconElementRight={<FlatButton label="Save" />}　/>
            <ActionHome />
            <Phone />

            <i class="anticon anticon-${'poweroff'}"></i>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}
export default Material;
