import React from 'react';
import MyProfile from './MyProfile';
import MyDisplayPage from './MyDisplayPage';
import Menu from './Menu';
import work1 from './work1.PNG';

const Resume = () =>{
    return(
        <>
        <MyProfile/>
        {/* <MyDisplayPage text={"Resume Page"}/> */}
        <div className="page">
        <h1 style={{fontSize:'40px',color:'white',fontFamily:'Poppins',marginTop:'5%'}}>My Work <span style={{color:'#1d8ba1'}}>Portfolio</span></h1>
            <div className="portfolioMainDiv">
                    <div className="row">
                        <div className="projectImage">
                        <span style={{color:'#1d8ba1',fontSize:'20px',fontFamily:'Poppins'}}>Himalayaprint NewsPortal</span>
                                <img src={work1} style={{width:'97%',height:'90%'}}/>
                        </div>
                    </div> 

                    <div className="row">
                        <div className="projectImage">
                        <span style={{color:'#1d8ba1',fontSize:'20px',fontFamily:'Poppins'}}>Himalayaprint NewsPortal</span>
                                <img src={work1} style={{width:'97%',height:'90%'}}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="projectImage">
                        <span style={{color:'#1d8ba1',fontSize:'20px',fontFamily:'Poppins'}}>Himalayaprint NewsPortal</span>
                                <img src={work1} style={{width:'97%',height:'90%'}}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="projectImage">
                        <span style={{color:'#1d8ba1',fontSize:'20px',fontFamily:'Poppins'}}>Himalayaprint NewsPortal</span>
                                <img src={work1} style={{width:'97%',height:'90%'}}/>
                        </div>
                    </div>
                    
            </div>
        </div>
        <Menu />
        </>
    );
}
export default Resume;