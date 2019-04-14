import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Box } from 'grommet';
import LucyComponent from '../components/LucyComponent';
import GeoffComponent from '../components/GeoffComponent';
import * as geoffGlasses from '../assets/animations/geoffGlasses.json';


class BlobSpace extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        const {
            classes,
            currentAnimation,
        } = this.props;
        return (
            <div>
                <Box className={classes.workspace} border={{ color: 'grey', size: 'small' }} round='xsmall'>
                    <div>
                        <GeoffComponent currentAnimation={currentAnimation}/>
                    </div>
                    {/* <div className={classes.gridDisplay}>
                        <LucyComponent />
                        <LucyComponent style='float: right' />
                    </div> */}
                </Box>
            </div>
        );
    }
}

const styles = {
    flexCenter: {
        position: 'absolute',
        top: '50%',
        left: '50%',
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

export default injectSheet(styles)(BlobSpace);