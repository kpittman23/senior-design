import React, { Component } from 'react'
import Lottie from 'react-lottie';
import * as lucyIdle from '../assets/animations/lucyIdle.json';
import * as lucyColors from '../assets/animations/lucyColors.json';
import * as lucyBowSpin from '../assets/animations/lucyBowSpin.json';

export default class LottieControl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isStopped: false, 
      isPaused: false,
      animationsArray: [lucyIdle, lucyColors, lucyBowSpin],
      animationIndex: 0,
    };
  }

  handleNextAnimation = () => {
    if (this.state.animationIndex === this.state.animationsArray.length - 1){
      this.setState({animationIndex: 0});
    } else {
      this.setState({animationIndex: this.state.animationIndex + 1});
    }
  }

  render() {
    const buttonStyle = {
      display: 'block',
      margin: '10px auto'
    };

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: this.state.animationsArray[this.state.animationIndex],
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return <div>
      <Lottie options={defaultOptions}
              height={800}
              width={800}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}/>
      <button style={buttonStyle} onClick={() => this.setState({isStopped: true})}>stop</button>
      <button style={buttonStyle} onClick={() => this.setState({isStopped: false})}>play</button>
      <button style={buttonStyle} onClick={() => this.setState({isPaused: !this.state.isPaused})}>pause</button>
      <button style={buttonStyle} onClick={() => this.handleNextAnimation()}>next animation</button>
    </div>
  }
}