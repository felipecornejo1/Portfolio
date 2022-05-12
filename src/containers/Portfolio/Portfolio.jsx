import React from 'react'
import {Project} from '../../components/index'
import starknightsHome from '../../assets/img/starknights-home.jpeg'

function Projects() {
    return(
        <div>
            <div className="projects__message-ctn" id="welcome">
                <p>
                    I'm a web developer with a <span>high focus</span> on <span>responsive, intuitive and simple</span> designs
                </p>
            </div>
            <section id='projects'>
                <div className="projects__showcase">
                    <h1>Projects</h1>
                    < Project 
                        title="Starknights"
                        secondaryTitle="First Big Project"
                        description="A videogame website where you can buy and sell items, check info on the game and look at other users&#x27; profiles"
                        visitLink="https://starknights.herokuapp.com"
                        githubLink="https://github.com/felipecornejo1/Starknights"
                        mainImg={starknightsHome}
                        mainImgAlt="Starknights Home Page"
                    />
                </div>
            </section>
        </div>
    )
}

export default Projects