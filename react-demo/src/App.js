import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';


class App extends React.Component{
  render(){
    return (
      <div>
        <Header />
        <Banner />
        <Footer />
      </div>
    )
  }
}

export default App;
