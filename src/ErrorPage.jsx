import React from 'react';
import MyProfile from './MyProfile';
import MyDisplayPage from './MyDisplayPage';
import Menu from './Menu';


const ErrorPage = () =>{
    return(
        <>
        {/* <MyProfile/> */}

        {/* <MyDisplayPage text={"ErrorPage Page"} name={"Subin Adhikari"} occupation={"I am a"}/> */}


        <div className="page">
        <h1 style={{fontSize:'40px',color:'white',fontFamily:'Poppins',marginTop:'5%'}}>OOPS! <span style={{color:'#1d8ba1'}}>Page</span> Not found</h1>     
        </div>



        {/* <Menu /> */}
        </>
    );
}
export default ErrorPage;