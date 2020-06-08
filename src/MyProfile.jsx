import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Pimage from './Pimage.jpg';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import SubinResume from './SubinResume.pdf';

const MyProfile = () =>{
    return(
        <>
        <div className="profileDiv">
        <Avatar className="grow" style={{width:'40%',height:'35%',border:'1px white solid',marginTop:'7%',marginLeft:'29%',marginBottom:'20px',cursor: 'pointer' }} src={Pimage} alt="Smage"/>
        <span style={{fontFamily:'Poppins',color:'white',fontSize:'30px'}}>SUBIN ADHIKARI</span><br/>
        <span style={{fontFamily:'Poppins',color:'grey',fontSize:'20px'}}>Web Developer</span><br/>

        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'15px'}}> 
        <a className="grow" style={{marginRight:'10px'}}><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="2" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(43,45,45,1)" iconSize="5" roundness="50%" url="https://www.instagram.com/subinadhikari/" size="32" /></a>
       <a className="grow" style={{marginRight:'10px'}}><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="2" borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(43,45,45,1)" iconSize="5" roundness="50%" url="https://www.facebook.com/subin.adhikari.566" size="32" /></a>
       <a className="grow"><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)"  borderWidth="2" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(43,45,45,1)" iconSize="5" roundness="50%" url="https://github.com/SubinAdhikari" size="32" /></a>
        </div>
        
       <a href={SubinResume} style={{textDecoration:'none'}} target="_blank"> <Button variant="contained" className="buttonHover" style={{fontSize:'15px',fontWeight:'bold',marginTop:'20px',borderRadius:'20px',marginBottom:'20px'}}>Download CV</Button><br/></a>
        
        <span style={{fontFamily:'sans-serif',color:'grey'}}>© 2020 All rights reserved</span>
        </div> 
        </>
    );
}
export default MyProfile;