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
                        <a href="" className="primary-btn">Contact me</a>
                        <a href=""><LinkedInIcon fontSize="inherit"></LinkedInIcon></a>
                        <a href=""><GitHubIcon fontSize="inherit"></GitHubIcon></a>
                    </div>
                </div>
            </div>
            <Link to="welcome" className="scroll-down" address="true" spy={true} smooth={true} offset={-100} duration={500}></Link>
        </header>
    )
}

export default Header