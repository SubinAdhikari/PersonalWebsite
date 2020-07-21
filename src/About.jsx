import React from 'react';
import MyProfile from './MyProfile';
import MyDisplayPage from './MyDisplayPage';
import Menu from './Menu';
import NavBarMobile from './NavBarMobile';


const About = () =>{
    return(
        <>
        {/* <MyProfile/> */}
        {/* <MyDisplayPage text={"About Page"}/> */}

        <div className="page">
        <NavBarMobile/>
        <h1 className="title" style={{fontSize:'40px',color:'white',fontFamily:'Poppins',marginTop:'5%'}}>About <span style={{color:'#1d8ba1'}}>Me</span></h1>
                <div className="aboutDetails"> 

                    {/*One dive  */}
                   <div className="personal" > 
                        <div className="description" style={{textAlign:'left',fontFamily:'Poppins',color:'grey'}}>
                        <h2 style={{color:'#1d8ba1',marginBottom:'10px'}}>My Description</h2>
                            <p>Hello Everyone I'm Subin Adhikari who is a passionate web developer who can work in both backend and frontend.
                                I am just a beginner developer so learning and upgrading my skill is what I work for.</p>
                        </div>
                        <div className="personalInfo" style={{textAlign:'left',fontFamily:'Poppins',color:'grey'}}>
                        <h2 style={{color:'#1d8ba1',marginBottom:'10px',marginTop:'10px'}}>Info</h2>
                            <p><span style={{color:'#1d8ba1'}}>Age: </span> 21</p>
                            <p><span style={{color:'#1d8ba1'}}>Residence: </span> Nepal</p>
                            <p><span style={{color:'#1d8ba1'}}>Address: </span>Kapan,Kathmandu</p>
                            <p><span style={{color:'#1d8ba1'}}>E-mail: </span>email@example.com</p>
                        </div>
                    </div>
                    {/* One div CLosed */}
                    <div className="whatIDo" style={{textAlign:'left',fontFamily:'Poppins',color:'grey',marginLeft:'10px'}}>
                        <h2 style={{color:'#1d8ba1',marginBottom:'10px'}}>What I am doing right now</h2>
                    <p>I'm currently persuing my Bachelor degree in Information Technology (BIM) .</p>
                    </div> 
                </div>
        </div>


        {/* <Menu /> */}
        </>
    );
}
export default About;