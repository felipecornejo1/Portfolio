import React from "react";
import Button from '@mui/material/Button';

function Navbar() {
    return(
        <div className="navbar">
            <div className="navbar__logo">
                <a href="#">FC</a>
            </div>
            <div className="navbar__links">
                <a href="#">Portfolio</a>
                <a href="#">Skills</a>
                <a href="#">Contact</a>
                <a href="#">About</a>
                <a href="#"><button> Resume </button></a>
            </div>
        </div>
    );
}

export default Navbar;