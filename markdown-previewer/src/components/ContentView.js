import React, { Component } from 'react'

class ContentView extends Component {
    render() {
        const { title, text } = this.props

        return (
            <div className="content-view">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        )
    }
}

export default ContentView