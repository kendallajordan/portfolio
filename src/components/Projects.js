import React, { Component } from 'react'
// Eventually, add categories to each project to filter them

// Individual projects may receive their own sub-component

// Project-cards should initially show thumbnail pic which
// transitions to a project-card text and button when hovered over

// Make project-card buttons project a "modal" that shows 
// carousel slideshow of project details with a small description
// below that, alopng with a redirect to site if applicable (github,etc.)

export default class Projects extends Component {
    render() {
        return (
            <section id="projects">
                <div id="section-title">
                    <h1>PROJECTS</h1>
                </div>
                <div id="projects-container">
                    <div id="project-card">
                        <div id="card-text">
                            <p><b>Kendall Jordan Website</b></p>
                            <p>React JS</p>
                        </div>
                        <div id="card-button">
                            <button id="button">LEARN MORE</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
