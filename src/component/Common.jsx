import React from 'react';
import './Common.css';
import webs from '../image/headerimage.jpg'

const Common =(props)=>{
    return(<>
    <section id='header' className='d-flex align-items-center'>
    <div className='container-fluid nav_bg'>
    <div className ='row'>
    <div className='col-10 mx-auto'>
    <div className='row'>
    <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
    <h1>
    {props.text}
    <br/>
    <strong className='brand_name'> VAIB TECH</strong>
    </h1>
    <h2 className='my-3'>
        We are the team of talented developers
    </h2>
    <div className='mt-3'>
    <a href={props.link} className='btn-get-started'>
        {props.buttn}
    </a>

    </div>

    </div> 
    <div className='col-lg-6 order-1 order-lg-2 header-img'>

<img src={props.imag} className='img-fluid animated' alt='home ing'/>
    </div>

    </div>

    </div>

    </div>
    </div>

    </section>
    </>);
}
export default Common;