import React from 'react';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import NoteOutlinedIcon from '@material-ui/icons/NoteOutlined';
import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import {Link} from 'react-router-dom';
const Menu = () =>{
    return(
        <>
        <div className="menuDiv">
        <Link to="/"> <HomeOutlinedIcon  color="error" fontSize="large" style={{width:'100%',height:'15%',paddingTop:'10px',paddingBottom:'5px',borderBottom:'2px #1d8ba1 solid'}}/></Link>
        <Link to="/About">  <PeopleAltOutlinedIcon  fontSize="large" color="error" style={{width:'100%',height:'15%',paddingTop:'10px',paddingBottom:'5px',borderBottom:'2px #1d8ba1 solid'}}/></Link>
        <Link to="/Portfolio">  <NoteOutlinedIcon  fontSize="large" color="error" style={{width:'100%',height:'15%',paddingTop:'10px',paddingBottom:'5px',borderBottom:'2px #1d8ba1 solid'}}/></Link>
        <Link to="/Contact">  <ContactMailOutlinedIcon  fontSize="large" color="error" style={{width:'100%',height:'15%',paddingTop:'10px',paddingBottom:'5px',borderBottom:'2px #1d8ba1 solid'}}/></Link>
        <Link to="/Blog">  <MenuBookOutlinedIcon  fontSize="large" color="error" style={{width:'100%',height:'15%',paddingTop:'10px',paddingBottom:'5px',}}/></Link>
        </div>
        </>
    );
}
export default Menu;