import React from 'react';
import MyProfile from './MyProfile';
import MyDisplayPage from './MyDisplayPage';
import Menu from './Menu';
import Avatar from '@material-ui/core/Avatar';
import Pimage from './Pimage.jpg';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import SubinResume from './SubinResume.pdf'; 
import Button from '@material-ui/core/Button';
import NavBarMobile from './NavBarMobile';




const Home = () =>{
    const date = new Date();
    const year=date.getFullYear();
    return(
        <>
        {/* <MyProfile/> */}

        {/* <MyDisplayPage text={"Home Page"} name={"Subin Adhikari"} occupation={"I am a"}/> */}


        <div className="page">
        <NavBarMobile/>
        <Avatar className="grow" id="avatar" style={{width:'60%',height:'30%',border:'1px white solid',marginTop:'7%',marginLeft:'20%',marginBottom:'30px',cursor: 'pointer' }} src={Pimage} alt="Smage"/>
        <h1 className="name" style={{fontSize:'50px',color:'white',fontFamily:'Poppins',marginTop:'25%'}}>Subin Adhikari</h1>
        <h1 style={{fontFamily:'sans-serif',color:'grey',fontSize:'30px'}}>I am a <span className="occupationText"></span></h1>

        <div class="socialMediaIcons" style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'15px'}}> 
        <a className="grow" style={{marginRight:'10px'}}><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="2" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(43,45,45,1)" iconSize="5" roundness="50%" url="https://www.instagram.com/subinadhikari/" size="32" /></a>
       <a className="grow" style={{marginRight:'10px'}}><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="2" borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(43,45,45,1)" iconSize="5" roundness="50%" url="https://www.facebook.com/subin.adhikari.566" size="32" /></a>
       <a className="grow"><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)"  borderWidth="2" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(43,45,45,1)" iconSize="5" roundness="50%" url="https://github.com/SubinAdhikari" size="32" /></a>
        </div>

        <a className="button" href={SubinResume} style={{textDecoration:'none'}} target="_blank"> <Button variant="contained" className="buttonHover" style={{fontSize:'25px',fontWeight:'bold',marginTop:'20px',borderRadius:'20px',marginBottom:'20px'}}>Download CV</Button><br/></a>
        
        <span className="allrightreserve" style={{fontFamily:'sans-serif',color:'grey',fontSize:'20px'}}>© {year} All rights reserved</span>

        </div>



        {/* <Menu /> */}
        </>
    ); 
}
export default Home;