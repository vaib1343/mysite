import React from 'react';
import Common from './component/Common';
import webs from './image/aboutimage.jpg';


const About =()=>{
    return(<>
    <Common text='Welcome To' buttn='Contact Now' imag={webs} link='/contact'/>
    </>);
}
export default About;