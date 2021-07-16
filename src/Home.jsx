import React from 'react';
import './Home.css';
import webs from './image/headerimage.jpg'
import Common from './component/Common'

const Home =()=>{
    return(<>
     <Common text='Hi myself' buttn='Get Started' imag={webs} HomeText={true}/>
    </>);
}
export default Home;