import React from "react"
import {Link} from 'react-scroll'

function Navbar() {
    return(
        <div className="navbar">
            <div className="navbar__logo">
                <Link to="header" spy={true} smooth={true} offset={-90} duration={500}> FC </Link>
            </div>
            <div className="navbar__links">
                <Link to="projects" activeClass="active" spy={true} smooth={true} offset={-90} duration={500}> Projects </Link>
                <Link to="skills" activeClass="active" spy={true} smooth={true} offset={-90} duration={500}> Skills </Link>
                <Link to="contact" activeClass="active" spy={true} smooth={true} offset={-90} duration={500}> Contact </Link>
                <Link to="about" activeClass="active" spy={true} smooth={true} offset={-90} duration={500}> About </Link>
                <a href="#"><button> Resume </button></a>
            </div>
        </div>
    );
}

export default Navbar