import React, { Component, useState } from 'react'
import KeyHandler, { keyHandler, KEYPRESS, KEYUP, KEYDOWN } from 'react-key-handler';

export class DrumPad extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };

        this.handleOnKeyDown = this.handleOnKeyDown.bind(this)
        this.handleOnKeyUp = this.handleOnKeyUp.bind(this)
    }

    handleOnKeyDown() {
        this.setState(state => ({
            isToggleOn: true
        }));

    }

    handleOnKeyUp() {
        this.setState(state => ({
            isToggleOn: false
        }));

    }

    render() {
        const { pad, eventHandler, disabled } = this.props

        const opacity = (this.state.isToggleOn && !disabled) ? '0.8' : '1'
        const boxShadow = this.state.isToggleOn
            ? '2px 2px 2px rgba(0,0,0,0.3)'
            : '3px 3px 3px rgba(0,0,0,0.7)'

        const handlePadTap = event => {
            this.setState(state => ({
                isToggleOn: true
            }));

            if (disabled) { return }

            const key = event.key ? event.key : pad.key

            const audio = document.getElementById(key.toUpperCase())

            audio.pause();
            audio.currentTime = 0;
            audio.play();

            eventHandler(event, pad)


        }

        return (

            <button
                className="drum-pad"
                id={pad.name}
                key={pad.name}
                value={pad.key}
                onMouseDown={handlePadTap}
                onMouseUp={this.handleOnKeyUp}
                style={{
                    opacity: opacity,
                    boxShadow: boxShadow
                }}
            >
                <React.Fragment>
                    <KeyHandler
                        keyEventName={KEYDOWN}
                        keyValue={pad.key}
                        onKeyHandle={handlePadTap}
                    />

                    <KeyHandler
                        keyEventName={KEYUP}
                        keyValue={pad.key}
                        onKeyHandle={this.handleOnKeyUp}
                    />

                    <KeyHandler
                        keyEventName={KEYDOWN}
                        keyValue={pad.key.toUpperCase()}
                        onKeyHandle={handlePadTap}
                    />

                    <KeyHandler
                        keyEventName={KEYUP}
                        keyValue={pad.key.toUpperCase()}
                        onKeyHandle={this.handleOnKeyUp}
                    />

                    {pad.key.toUpperCase()}

                    <audio
                        className="clip"
                        id={pad.key.toUpperCase()}
                        src={pad.audioFile}
                    >
                        Your browser does not support the audio element.
                    </audio>

                </React.Fragment>
            </button>
        )
    }
}

export default DrumPad
