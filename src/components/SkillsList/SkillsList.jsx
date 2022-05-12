import React from 'react'

function SkillsList (props) {
    return(
        <div className="skills__list">
            <h1>{props.title}</h1>
            <ul>
                {props.skills.map(skill => {
                    return(
                        <li key={skill}>{skill}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SkillsList