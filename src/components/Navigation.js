import React, { Component } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
// Add a dark/light mode button
// Should remain at top of page as you scroll around the document

export default class Navigation extends Component {
    render() {
        return (
            <nav className="nav" id="navbar">
                <div className="nav-content">
                    <ul className="nav-items">
                        <li className="nav-item"><Link
                                                    activeClass="active"
                                                    to="home"
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-70}
                                                    duration={500}>Home</Link></li>
                        <li className="nav-item"><Link
                                                    activeClass="active"
                                                    to="about"
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-70}
                                                    duration={500}>About</Link></li>
                        <li className="nav-item"><Link
                                                    activeClass="active"
                                                    to="projects"
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-70}
                                                    duration={500}>Projects</Link></li>
                        <li className="nav-item"><Link
                                                    activeClass="active"
                                                    to="contact"
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-70}
                                                    duration={500}>Contact</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
