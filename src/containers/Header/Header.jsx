import React from "react"
import {Link} from 'react-scroll'
import { Navbar } from '../../components/index'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

function Header() {
    return(
        <header id="header">
            < Navbar />
            <div className="header__circle">
                <div className="header__presentation">
                    <h1>Felipe Cornejo</h1>
                    <h2>Fullstack Web Developer</h2>
                    <div className="header__presentation-contact-btns">
                        <Link to="contact" className="primary-btn" activeClass="active" spy={true} smooth={true} offset={-90} duration={500}> Contact Me </Link>
                        <a href="https://linkedin.com/in/felipecornejo1" target='_blank' rel="noreferrer"><LinkedInIcon fontSize="inherit"></LinkedInIcon></a>
                        <a href="https://github.com/felipecornejo1" target='_blank' rel="noreferrer"><GitHubIcon fontSize="inherit"></GitHubIcon></a>
                    </div>
                </div>
            </div>
            <Link to="welcome" className="scroll-down" address="true" spy={true} smooth={true} offset={-100} duration={500}></Link>
        </header>
    )
}

export default Header