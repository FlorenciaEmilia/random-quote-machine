import React, { Component } from 'react';
import './Quote.css';

class Quote extends Component {
	constructor(props) {
		super(props);
		this.rgb = this.rgb.bind(this);
	}
	rgb() {
		let r = Math.floor(Math.random() * 150);
		let g = Math.floor(Math.random() * 150);
		let b = Math.floor(Math.random() * 150);
		return `rgb(${r}, ${g}, ${b})`;
	}

	render() {
		let colorDisplay = this.rgb();
		let quote = encodeURIComponent(this.props.quote);
		let author = encodeURIComponent(this.props.author);
		return (
			<div id="quote-box">
				<div id="quote" style={{ backgroundColor: colorDisplay }}>
					<blockquote>
						<p id="text">{this.props.quote}</p>
						<footer id="author">-{this.props.author}</footer>
					</blockquote>
				</div>

				<div id="quote-generator">
					<a
						href={`https://twitter.com/intent/tweet?text="${quote}"-${author}`}
						target="_blank"
						rel="noopener noreferrer"
						id="tweet-quote"
						style={{ backgroundColor: colorDisplay }}
					>
						<i className="fab fa-twitter" />
					</a>
					<button id="new-quote" onClick={this.props.newQuote} style={{ backgroundColor: colorDisplay }}>
						New Quote
					</button>
				</div>
			</div>
		);
	}
}

export default Quote;
