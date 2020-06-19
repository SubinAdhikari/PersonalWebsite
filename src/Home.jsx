import React from 'react';
import MyProfile from './MyProfile';
import MyDisplayPage from './MyDisplayPage';
import Menu from './Menu';


const Home = () =>{
    return(
        <>
        {/* <MyProfile/> */}

        {/* <MyDisplayPage text={"Home Page"} name={"Subin Adhikari"} occupation={"I am a"}/> */}


        <div className="page">
        <h1 className="name" style={{fontSize:'50px',color:'white',fontFamily:'Poppins',marginTop:'25%'}}>Subin Adhikari</h1>
        <h1 style={{fontFamily:'sans-serif',color:'grey',fontSize:'30px'}}>I am a <span className="occupationText"></span></h1>
        </div>



        {/* <Menu /> */}
        </>
    );
}
export default Home;