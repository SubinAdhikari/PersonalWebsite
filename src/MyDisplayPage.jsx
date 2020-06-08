import React from 'react';

const MyDisplayPage = (props) =>{
    return(
        <>
        <div className="page">
       <h1 style={{fontSize:'40px',color:'white',fontFamily:'Poppins',marginTop:'5%'}}>{props.text}</h1>
        <h1 style={{fontSize:'50px',color:'white',fontFamily:'Poppins',marginTop:'25%'}}>{props.name}</h1>
        <h1 style={{fontFamily:'sans-serif',color:'grey',fontSize:'30px'}}>I am a<span className="occupationText"></span></h1>
        
        </div>
        </>
    );
}
export default MyDisplayPage;



