
import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from './logo.svg';
import Sound from 'react-sound';
import Button from './components/SoundButton';

import ActivityPage1 from './pages/ActivityPage1';
import ActivityPage2 from './pages/ActivityPage2';
import ActivityPage3 from './pages/ActivityPage3';
import ActivityPage4 from './pages/ActivityPage4';
import ActivityPage5 from './pages/ActivityPage5';
import ActivityPage6 from './pages/ActivityPage6';
import ActivityPage7 from './pages/ActivityPage7';
import ActivityPage8 from './pages/ActivityPage8';
import ActivityPage9 from './pages/ActivityPage9';
import ActivityPage10 from './pages/ActivityPage10';
import TitlePage from './pages/TitlePage';

import LottieControl from './components/LottieControl';

class Page extends Component{
  constructor(){
    super();
    this.state = {
    }
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
    </div>
    );
  }
}

const Home = (props) => (
  <Page title="Home" {...props}/>
);

// Leaving this in here so we can remember how to route between multiple pages

// const About = (props) => (
//   <Page title="About"/>
// );


class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/button" component={Home}/>
        <Route path="/1" component={ActivityPage1}/>
        <Route path="/2" component={ActivityPage2}/>
        <Route path="/3" component={ActivityPage3}/>
        <Route path="/4" component={ActivityPage4}/>
        <Route path="/5" component={ActivityPage5}/>
        <Route path="/6" component={ActivityPage6}/>
        <Route path="/7" component={ActivityPage7}/>
        <Route path="/8" component={ActivityPage8}/>
        <Route path="/9" component={ActivityPage9}/>
        <Route path="/10" component={ActivityPage10}/>
        <Route path="/" component={TitlePage} history={browserHistory}/>
      </Router>
    );
  }
}

export default App;