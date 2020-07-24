import marked from 'marked'
// import hljs from 'highlight.js'

marked.setOptions({
    renderer: new marked.Renderer(),
    // highlight: function (lang, code) {
    //     return hljs.highlightAuto(lang, code).value
    // },
    pedantic: false,
    gfm: true,
    breaks: true,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
})

/**
 * Actions Types
 */
const ADD = 'ADD'
const INIT = 'INIT'


export const defaultState =
    `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`


/**
 * Reducers
 */
const markdownReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD:
            console.log('action', action)
            const markdown = marked(action.text)
            return marked(action.text)
        case INIT:
            return marked(action.text)
        default:
            return state
    }
}

/**
 * Actions Creators
 */
export const addText = (text) => {
    console.log(text)
    return {
        type: ADD,
        text

    }
}

export const initialText = () => {
    return {
        type: INIT,
        text: defaultState
    }
}

export default markdownReducer