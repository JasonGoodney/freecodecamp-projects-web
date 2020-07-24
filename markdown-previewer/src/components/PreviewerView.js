import React, { Component } from 'react'
import { connect } from 'react-redux'
import marked from 'marked'

const PreviewerView = props => {
    const { markdownString } = props

    const markdownPreview = () => {
        return { __html: markdownString }
    }

    return (
        <div className='Previewer' id='container'>
            <div id='header'>Previewer</div>
            <div id='content'>
                <div id='preview' dangerouslySetInnerHTML={markdownPreview()}></div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        markdownString: state.markdownString
    }
}

export default connect(mapStateToProps)(PreviewerView)
