import React from 'react';
// import Menu from './Menu';
import './NavBarMobile.css';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import NoteOutlinedIcon from '@material-ui/icons/NoteOutlined';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import {Link} from 'react-router-dom';


const NavBarMobile = () =>{
    return(
        <div className="hamburgerMenu">
             

                    <label for="toggle">&#9776;</label>
                    <input type="checkbox" id="toggle"/>

            <nav> 
        <Link to="/"> <HomeOutlinedIcon className="shrink" color="error" fontSize="small" style={{width:'100%',height:'10%',paddingTop:'10px',paddingBottom:'5px',borderBottom:'2px #1d8ba1 solid'}}/></Link>
        <Link to="/About">  <PeopleAltOutlinedIcon className="shrink" fontSize="small" color="error" style={{width:'100%',height:'10%',paddingTop:'10px',paddingBottom:'5px',borderBottom:'2px #1d8ba1 solid'}}/></Link>
        <Link to="/Portfolio">  <NoteOutlinedIcon className="shrink" fontSize="small" color="error" style={{width:'100%',height:'10%',paddingTop:'10px',paddingBottom:'5px',borderBottom:'2px #1d8ba1 solid'}}/></Link>
        <Link to="/Contact">  <ContactMailOutlinedIcon className="shrink" fontSize="small" color="error" style={{width:'100%',height:'10%',paddingTop:'10px',paddingBottom:'5px',borderBottom:'2px #1d8ba1 solid'}}/></Link>
        <Link to="/Blog">  <MenuBookOutlinedIcon className="shrink" fontSize="small" color="error" style={{width:'100%',height:'10%',paddingTop:'10px',paddingBottom:'5px',}}/></Link>
            </nav>
        </div>
    )
}
export default NavBarMobile;