import React from 'react';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

function Project(props) {
    return(
        <div aos="fade-right">
            <a href={props.visitLink} target="_blank" rel="noreferrer" className="projects__showcase-item">
                <div className="projects__showcase-item">
                    <div className="projects__showcase-item-overlay">
                        <h5>{props.secondaryTitle}</h5>
                        <h1>{props.title}</h1>
                        <p>{props.description}</p>
                        <div className="projects__showcase-item-buttons-ctn">
                            <a href={props.visitLink} target="_blank" rel="noreferrer"><LinkIcon/> Visit</a>
                            <a href={props.githubLink} target="_blank" rel="noreferrer"><GitHubIcon/> View Code</a>
                        </div>
                    </div>
                    <figure>
                        <img src={props.mainImg} alt={props.mainImgAlt} />
                    </figure>
                </div>
            </a>
        </div>
    )
}

export default Project