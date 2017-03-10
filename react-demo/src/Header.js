import React from 'react';

import Logo from './Logo';
import SignIn from './SignIn';

class Header extends React.Component{
  render(){
    return (
      <div>
        <Logo />
        <SignIn />
      </div>
    )
  }
}

export default Header;
