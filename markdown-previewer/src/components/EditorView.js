import React, { Component, useState, useEffect } from 'react'
import { defaultState, addText, initialText } from '../reducers/markdownReducer'
import { connect } from 'react-redux'

const EditorView = (props) => {
    const [text, setText] = useState('')

    useEffect(() => {
        props.loadInitialText()
        setText(props.markdownString)
    }, [])

    const handleChange = event => {
        event.preventDefault()
        props.onAddTextClick(event.target.value)
        setText(event.target.value)
    }

    const resetMarkdown = event => {
        event.preventDefault()
        props.onAddTextClick('')
        setText('')
    }

    return (
        <div className='Editor' id='container'>
            <div id='header'>Editor</div>
            <div id='content'>
                <form>
                    <textarea id='editor' value={text} onChange={handleChange} />
                </form>
                <div>
                    <button onClick={resetMarkdown}>reset</button>
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        markdownString: defaultState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddTextClick: text => {
            dispatch(addText(text))
        },
        loadInitialText: () => {
            dispatch(initialText())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorView)
