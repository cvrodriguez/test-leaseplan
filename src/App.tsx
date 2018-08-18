
import * as React from 'react';
import './App.css';


import 'antd/dist/antd.css';

import EmailUser from './components/emails/EmailUser';
import Repositories from './components/repositories/Repositories';
import logo from './logo.svg';



class App extends React.Component {

  public render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome Viviana's World</h1>
        </header>
        <p className="App-intro" >
         <strong> I'm Viviana </strong> 
         this is my test, I don't have experience,
          but I'm happy for this change
        
        </p>
        <a> Go to email</a>
        <br/>
        <a> Go to repository</a>
        <hr/>
        
         <Repositories/>
         <hr/>
        <EmailUser/>
        
      </div>
      
    );
  }
}

export default App;
