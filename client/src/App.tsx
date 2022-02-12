
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Service';
import { callGrpcService } from './Service';

const App = () => {
  


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button style={{padding:10}} onClick={() => {
            callGrpcService('guy@mail.com', 'guy', '123456')
          }}>Click for grpc request</button>
        </header>
      </div>
    );
}


export default App;
