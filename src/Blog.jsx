import React from 'react';
import MyProfile from './MyProfile';
import MyDisplayPage from './MyDisplayPage';
import Menu from './Menu';
import NavBarMobile from './NavBarMobile';


const Blog = () =>{
    return(
        <>
        {/* <MyProfile/> */}
        {/* <MyDisplayPage text={"Blog Page"}/> */}
        <div className="page">
            <NavBarMobile/>
        <h1 className="title" style={{fontSize:'40px',color:'white',fontFamily:'Poppins',marginTop:'5%'}}>Blog</h1>
            
        </div>
        {/* <Menu /> */}
        </>
    );
}
export default Blog;