import React, { Component } from 'react'
import { animateScroll as scroll } from 'react-scroll';

export default class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div id="button page-link">
                    <button onClick={() => scroll.scrollToTop()}>Back to Top</button>
                </div>
                <div id="social-media">
                    <a href="https://www.linkedin.com/in/kendallajordan/" rel="noopener noreferrer" target="_blank">My LinkedIn</a>
                    <a href="https://www.github.com/kendallajordan/" rel="noopener noreferrer" target="_blank">My Github</a>
                    <a href="https://www.instagram.com/kidnamedkendall/" rel="noopener noreferrer" target="_blank">My Instagram</a>
                </div>
                <div id="footnote">
                    <p>KENDALL JORDAN © 2020</p>
                </div>
            </footer>
        )
    }
}
