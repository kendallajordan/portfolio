import React, { Component } from 'react'
// Add percentage meter on each skill bar

const SKILLS = [
    {type: "HTML", level: 70},
    {type: "CSS", level: 70},
    {type: "JavaScript", level: 80},
    {type: "React.js", level: 80},
    {type: "C/C++", level: 70},
    {type: "Java", level: 80},
    {type: "Python", level: 60},
];

export default class SkillBars extends Component {
    render() {
        const skills = SKILLS;

        return (
            <div>
                <h3>Proficiency</h3>
                <ul id="skills">
                    {skills.map((skill, index) =>
                        <li key={skill.type}>
                            <p>{skill.type} {skill.level}%</p>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}
