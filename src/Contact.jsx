import React from 'react';
import MyProfile from './MyProfile';
import MyDisplayPage from './MyDisplayPage';
import Menu from './Menu';
import NavBarMobile from './NavBarMobile';


const Contact = () =>{
    return(
        <>
        {/* <MyProfile/> */}
        {/* <MyDisplayPage text={"Contact Us Page"}/> */}
        <div className="page">
            <NavBarMobile/>
        <h1 className="title" style={{fontSize:'40px',color:'white',fontFamily:'Poppins',marginTop:'5%'}}>Contact</h1>

            
        </div>
        {/* <Menu /> */}
        </>
    );
}
export default Contact;