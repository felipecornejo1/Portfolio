import React from 'react'
import {SkillsList} from '../../components/index'

function Skills() {
    return(
        <section id="skills">
            <h1>Skills</h1>
            <h2>I love learning new technologies and improving as a developer. Here are some of the most important skills I've got to offer:</h2>
            <div className="skills__ctn" aos="fade-right">
                <div className="skills__frontend" aos-data="fade-right">
                    <SkillsList
                        title="Frontend"
                        skills={['HTML', 'CSS', 'JavaScript', 'Sass', 'React', 'Fetch', 'Bootstrap']}
                    />
                </div>
                <div className="skills__backend" aos-data="fade-right">
                    <SkillsList
                        title="Backend"
                        skills={['Node.js', 'Express', 'REST APIs', 'mySQL', 'Sequelize']}
                    />
                </div>
                <div className="skills__others" aos-data="fade-right">
                    <SkillsList
                        title="Others"
                        skills={['Agile', 'Scrum', 'Git', 'OOP']}
                    />
                </div>
            </div>
        </section>
    )
}

export default Skills