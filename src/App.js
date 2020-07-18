import React, { Component } from 'react';

import './App.css';
import Logo from './components/logo/logo';
import Form from './components/form/form';


class App extends Component {
  render(){
    return (
      <div className="App">
                  <Logo/>
                  <Form/> {/* <br></br><br></br><br></br><br></br><br></br><br></br><br></br> */}
                  
                  <h1 className ='pv6 f5 m5 center white'>Developed with ❤ By Pulkit Mittal</h1>
                  
                
                  
      </div>
    );

    }

}

export default App;
