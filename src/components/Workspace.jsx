import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Button, Box } from 'grommet';
import HintModal from './HintModal';
import Sound from 'react-sound';
import GeoffComponent from '../components/GeoffComponent';
import Lottie from 'react-lottie';

import * as geoffA from '../assets/sounds/geoffA.mp3';
import * as geoffB from '../assets/sounds/geoffB.mp3';
import * as geoffC from '../assets/sounds/geoffC.mp3';
import * as geoffD from '../assets/sounds/geoffD.mp3';
import * as geoffE from '../assets/sounds/geoffE.mp3';

import * as freddieA from '../assets/sounds/freddieA.mp3';
import * as freddieB from '../assets/sounds/freddieB.mp3';
import * as freddieC from '../assets/sounds/freddieC.mp3';
import * as freddieD from '../assets/sounds/freddieD.mp3';
import * as freddieE from '../assets/sounds/freddieE.mp3';

import * as lucyA from '../assets/sounds/lucyA.mp3';
import * as lucyB from '../assets/sounds/lucyB.mp3';
import * as lucyC from '../assets/sounds/lucyC.mp3';
import * as lucyD from '../assets/sounds/lucyD.mp3';
import * as lucyE from '../assets/sounds/lucyE.mp3';

import * as geoffGlasses from '../assets/animations/geoffGlasses.json';
import * as geoffJump from '../assets/animations/geoffJump.json';
import * as geoffSpin from '../assets/animations/geoffSpin.json';
import * as geoffBig from '../assets/animations/geoffBig.json';
import * as geoffCrown from '../assets/animations/geoffCrown.json';
import * as geoffIdle from '../assets/animations/geoffIdle.json';

import * as freddieDrip from '../assets/animations/freddieDrip.json';
import * as freddieEyes from '../assets/animations/freddieEyes.json';
import * as freddieIdle from '../assets/animations/freddieIdle.json';
import * as freddieSmall from '../assets/animations/freddieSmall.json';
import * as freddieThumbs from '../assets/animations/freddieThumbs.json';
import * as freddieSpin from '../assets/animations/freddieSpin.json';

import * as lucyBows from '../assets/animations/lucyBows.json';
import * as lucyBowSpin from '../assets/animations/lucyBowSpin.json';
import * as lucyEyes from '../assets/animations/lucyEyes.json';
import * as lucyIdle from '../assets/animations/lucyIdle.json';
import * as lucyJump from '../assets/animations/lucyJump.json';
import * as lucySmall from '../assets/animations/lucySmall.json';




import Util from '../assets/util';

class Workspace extends Component {
    constructor() {
        super();
        this.state = {
            shouldRenderSound: false,
            songArray: [
                freddieA,
                geoffB,
                lucyC,
                freddieB,
            ],
            currentSong: null,
            index: 0,
            isStopped: false,
            isPaused: false,
            animationsArray: null,
            currentLucyAnimation: lucyIdle,
            currentFreddieAnimation: freddieIdle,
            currentGeoffAnimation: geoffIdle,
            animationsList: [
                lucyBows,
                lucyBowSpin,
                lucyEyes,
                lucyJump,
                lucySmall,
                lucyIdle,
                geoffGlasses,
                geoffJump,
                geoffSpin,
                geoffBig,
                geoffCrown,
                geoffIdle,
                freddieDrip,
                freddieEyes,
                freddieSmall,
                freddieSpin,
                freddieThumbs,
                freddieIdle,
            ]
        };
    }

    getArrayAndHandleSound() {
        let animations = Util.createAnimationsArray(this.state.songArray);
        this.setState({
            animationsArray: animations,
        }, () => {
            this.handlePlaySound();
        });
    }

    handlePlaySound() {
        this.setState({
            shouldRenderSound: true,
            currentSong: this.state.songArray[this.state.index],
            index: this.state.index + 1,
        }, () => {
            console.log(this.state)
        });
    }

    handleSongFinishedPlaying = () => {
        if (this.state.index <= this.state.songArray.length - 1) {
            this.setState({
                currentSong: this.state.songArray[this.state.index],
                index: this.state.index + 1,
            })
        }
    }

    handleAnimation = () => {
        if (this.state.index <= this.state.animationsArray.length) {
            if (this.state.animationsArray[this.state.index - 1] < 5) {
                this.setState({
                    currentLucyAnimation: this.state.animationsList[this.state.animationsArray[this.state.index - 1]],
                })
            } else if (this.state.animationsArray[this.state.index - 1] > 5 && this.state.animationsArray[this.state.index - 1] <  12) {
                this.setState({
                    currentGeoffAnimation: this.state.animationsList[this.state.animationsArray[this.state.index - 1]],
                })
            } else {
                this.setState({
                    currentFreddieAnimation: this.state.animationsList[this.state.animationsArray[this.state.index - 1]],
                })
            }
        }
    }

    render() {
        const {
            classes,
        } = this.props;

        const defaultOptionsFreddie = {
            loop: true,
            autoplay: true,
            animationData: this.state.currentFreddieAnimation,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };
        const defaultOptionsGeoff = {
            loop: true,
            autoplay: true,
            animationData: this.state.currentGeoffAnimation,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };
        const defaultOptionsLucy = {
            loop: true,
            autoplay: true,
            animationData: this.state.currentLucyAnimation,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return (
            <div className={classes.flexCenter}>
                <div>
                    <Box className={classes.workspace} border={{ color: 'grey', size: 'small' }} round='xsmall'>
                        <div>
                            <Lottie options={defaultOptionsFreddie}
                                height={200}
                                width={200}
                                isStopped={this.state.isStopped}
                                isPaused={this.state.isPaused} />
                        </div>
                        <div className={classes.gridDisplay}>
                            <Lottie options={defaultOptionsLucy}
                                height={200}
                                width={200}
                                isStopped={this.state.isStopped}
                                isPaused={this.state.isPaused} />
                            <Lottie options={defaultOptionsGeoff}
                                height={200}
                                width={200}
                                isStopped={this.state.isStopped}
                                isPaused={this.state.isPaused} />
                        </div>
                        {/* <div className={classes.gridDisplay}>
                        <LucyComponent />
                        <LucyComponent style='float: right' />
                    </div> */}
                    </Box>
                </div>
                <Button className={classes.button} label='Run' primary='true' onClick={() => {
                    this.getArrayAndHandleSound();
                }} />
                <HintModal />
                {this.state.shouldRenderSound && <Sound
                    url={this.state.currentSong}
                    playStatus={Sound.status.PLAYING}
                    playFromPosition={0 /* in milliseconds */}
                    autoLoad={true}
                    onLoad={this.handleAnimation}
                    onFinishedPlaying={this.handleSongFinishedPlaying}
                />}
            </div>
        );
    }
}

const styles = {
    flexCenter: {
        float: 'right',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    workspace: {
        width: 600,
        height: 500,
        margin: 5,
        marginTop: 10,
        backgroundColor: 'white',
    },
    button: {
        margin: 5,
        marginTop: 10,
    },
    gridDisplay: {
        display: 'grid',
        gridTemplateColumns: 'auto auto',
    },
}

export default injectSheet(styles)(Workspace);