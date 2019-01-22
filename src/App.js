import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state= {
      input: ''
    }
  }

  onInputChange = (event) => {

  }

  onButtonSubmit = () => {

  }

  render() {
    return (
      <div className='App'>
        <Particles className='particles' />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      </div>
    );
  }
}

export default App;
