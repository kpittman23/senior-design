import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Button, Box } from 'grommet';
import HintModal from './HintModal';
import Sound from 'react-sound';
import GeoffComponent from '../components/GeoffComponent';
import Lottie from 'react-lottie';
import * as lucyA from '../assets/sounds/lucyA.mp3';
import * as lucyB from '../assets/sounds/lucyB.mp3';
import * as lucyD from '../assets/sounds/lucyD.mp3';

import * as geoffA from '../assets/sounds/geoffA.mp3';
import * as geoffB from '../assets/sounds/geoffB.mp3';
import * as geoffC from '../assets/sounds/geoffC.mp3';

import * as geoffGlasses from '../assets/animations/geoffGlasses.json';
import * as geoffJump from '../assets/animations/geoffJump.json';
import * as geoffSpin from '../assets/animations/geoffSpin.json';
import Util from '../assets/util';

class Workspace extends Component {
    constructor() {
        super();
        this.state = {
            shouldRenderSound: false,
            songArray: [
                geoffA,
                geoffB,
                geoffC,
            ],
            currentSong: null,
            index: 0,
            isStopped: false,
            isPaused: false,
            animationsArray: null,
            currentAnimation: geoffGlasses,
        };
    }

    test() {
        let animations = Util.createAnimationsArray(this.state.songArray);
        console.log(animations)
    }

    handlePlaySound() {
        let animations = Util.createAnimationsArray(this.state.songArray);

        this.setState({
            animationsArray: animations,
            shouldRenderSound: true,
            currentSong: this.state.songArray[this.state.index],
            index: this.state.index + 1,
        }, () => {
            console.log(this.state)
        });

        // this.setState({
        //     animationsArray: animations,
        //     shouldRenderSound: true,
        //     currentSong: this.state.songArray[this.state.index],
        //     index: this.state.index + 1,
        // })
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
        if (this.state.index <= this.state.animationsArray.length - 1) {
            this.setState({
                currentAnimation: this.state.animationsArray[this.state.index],
            })
        }
    }

    render() {
        const {
            classes,
        } = this.props;

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: this.state.currentAnimation,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return (
            <div className={classes.flexCenter}>
                <div>
                    <Box className={classes.workspace} border={{ color: 'grey', size: 'small' }} round='xsmall'>
                        <div>
                            <Lottie options={defaultOptions}
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
                    this.handlePlaySound();
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