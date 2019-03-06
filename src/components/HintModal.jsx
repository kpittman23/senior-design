import { Button, Paragraph } from 'grommet';
import injectSheet from 'react-jss';
import React, { Component } from 'react';
import Modal from 'react-modal';



class HintModal extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        const {
            classes,
        } = this.props;
        return (
            <div>
                <Button className={classes.button} label='Hint' onClick={this.handleOpenModal}></Button>
                <div className={classes.flexCenter}>
                    <Modal className={classes.modal}
                        isOpen={this.state.showModal}
                    >
                        <Paragraph className={classes.hint}>{hint}</Paragraph>
                        <Button className={classes.button} label='Got it!' onClick={this.handleCloseModal}></Button>
                    </Modal>
                </div>
            </div>
        );
    }
}

const hint = 'Try dragging different blocks into the workspace. What sounds can you make?'

const styles = {
    flexCenter: {
        position: 'absolute',
        top: '50%',
        left: '50%',
    },
    modal: {
        width: '40%',
        height: '40%',
        position: 'fixed',
        top: '25%',
        right: '30%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderColor: 'grey',
        borderWidth: 2,
    },
    button: { 
        margin: 5,
        marginTop: 10,
    },
    hint: {
        fontFamily: 'Arvo',
    },
}

export default injectSheet(styles)(HintModal);