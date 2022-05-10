import React from "react";
import { Navbar } from '../../components/index';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Header() {
    return(
        <header>
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
            <a href="#" class="scroll-down" address="true"></a>
        </header>
    );
}

export default Header;