import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
            <section id="home">
                <div id="greeting-text">
                    <h1>Hello there, I'm Kendall Jordan.</h1>
                    <h1>I am a Software Developer.</h1>
                </div>
                {/* Add functionality to button, scroll to about section*/}
                <div id="button page-link">
                    <button>Step Inside</button>
                </div>
            </section>
        )
    }
}

export default Home;