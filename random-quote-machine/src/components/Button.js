import React, { Component } from 'react'

class Button extends Component {
    render() {
        const { text } = this.props

        return (
            <div className="Action-button">
                <p>{text}</p>
            </div>
        )
    }
}

export default Button