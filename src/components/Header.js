import React from 'react'
import '../header.css'
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


function Header() {
    return (
        <div className="header">

            <Link className="headerLinkLogo" to="/">
            <h1 className="headerLogo"> Cross Cars</h1>
            </Link>
            <nav>

             <div className="headerNav">

             <Link className="headerLink" to="/">
            <h4 className="headerOPtion"> Buy a Car </h4>
            </Link>

            <Link className="headerLink" to="/Register">
            <h4 className="headerOPtion"><span><ExitToAppIcon className="icons" /></span> Register </h4>
            </Link>

            <Link className="headerLink" to="/signin">
            <h4 className="headerOPtion"><span><AccountCircleIcon className="icons" /></span> Sign In </h4>
            </Link>

            
            </div>

            </nav>
        </div>   
    )
}

export default Header
