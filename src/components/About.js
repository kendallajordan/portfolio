import React, { Component } from 'react'
import me from '../images/me.png'
import resume from '../files/Kendall_Jordan_Resume.pdf'
import SkillBars from './SkillBars'

export default class About extends Component {
    render() {
        return (
            <section id="about">
                <div id="section-title">
                    <h1>ABOUT</h1>
                </div>
                <div id="traits">
                    <ul>
                        <li>Complete tasks as quickly as possible</li>
                        <li>Put as much attention to detail to work</li>
                        <li>Active knowledge seeker</li>
                        <li>Effective communication and teamwork with peers</li>
                    </ul>
                </div>
                <div id="profile">
                    <img id="img-profile" src={me} alt="kendall-pic" width="300" height="400"/>
                    <div id="text-profile">Kendall Jordan</div>
                </div>
                <div id="bio">
                    <p>I'm a Filipino-African-American software developer with a
                        passion for programming and learning more about computer technology!
                        As a 2020 graduate from San Diego State University, I have received my
                        Bachelor's degree in Computer Science. I am fascinated with many branches
                        of computer tech, including augmented reality, cybersecurity, and web and
                        mobile app development.
                    </p>
                    <p>
                        I currently work part-time as a coffee barista but also seeking work in the
                        computer industry while developing my own personal projects.
                    </p>
                    <a href={resume} rel="noopener noreferrer" target="_blank">Check out my resume here</a>
                </div>
                <div id="skill-bar">
                    <SkillBars />
                </div>
            </section>
        )
    }
}
