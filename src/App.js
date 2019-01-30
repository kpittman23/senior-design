
import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from './logo.svg';
import './App.css';
import Sound from 'react-sound';
import Button from './SoundButton';
import sadTrombone from './sadTrombone.mp3'

class Page extends Component{
  constructor(){
    super();
    this.state = {
      shouldRenderSound : false,
    }
  }

  playSound = () => {
    this.setState({
      shouldRenderSound: true,
    })
  }

  render(){
    const title = this.props.title;
    return (
    <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{title}</h2>
    </div>
    <p className="App-intro">
      This is the {title} page.
    </p>
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <Link to="/about">About</Link>
    </p>
    <p>
      <Link to="/settings">Settings</Link>
    </p>
    <Button text={"Play Sound"} onClick={() => {
      console.log('hello');
      this.playSound();
    }}/>
    {this.state.shouldRenderSound && <Sound
          url={sadTrombone}
          playStatus={Sound.status.PLAYING}
          playFromPosition={0 /* in milliseconds */}
          autoLoad={true}
        />}
    </div>
    );
  }
}

const Home = (props) => (
  <Page title="Home"/>
);

const About = (props) => (
  <Page title="About"/>
);

const Settings = (props) => (
  <Page title="Settings"/>
);

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/settings" component={Settings}/>
      </Router>
    );
  }
}

export default App;