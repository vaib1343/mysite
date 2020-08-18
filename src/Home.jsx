import React from 'react';
import './Home.css';
import webs from './image/headerimage.jpg'
import Common from './component/Common'

const Home =()=>{
    return(<>
     <Common text='Grow your business with' buttn='Get Started' imag={webs}/>
    </>);
}
export default Home;