import React, { Component } from 'react'


class QuoteBox extends Component {
    render() {
        const { primaryColor } = this.props
        const { author, text } = this.props.quote

        const encodedText = encodeURIComponent(text.trim())
        const encodedAuthor = encodeURIComponent(author.trim())

        return (
            <div className="Rounded-corners" id="quote-box">
                <div id="quote">
                    <h3 id="text" style={{ color: primaryColor }}>
                        <i class="fa fa-quote-left"></i> {text}
                    </h3>
                    <p id="author" style={{ color: primaryColor }}>
                        - {author}
                    </p>
                </div>
                <div className="buttons">

                    <a className="Rounded-corners Action-button" id="tweet-quote" href={`https://twitter.com/intent/tweet?hashtags=quotes,freecodecamp&related=freecodecamp&text="${encodedText}."%20-%20${encodedAuthor}`} target="_blank" style={{ backgroundColor: primaryColor, color: "white" }}><i class="fab fa-twitter"></i></a>


                    <button className="Rounded-corners Action-button" id="new-quote" style={{ backgroundColor: primaryColor }} onClick={this.props.onNewQuoteClick}>
                        New quote
                </button>
                </div>
            </div>
        )
    }
}

export default QuoteBox