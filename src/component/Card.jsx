import React from 'react';
import './Card.css';
import cardimg from '../image/meter.jpg'

const Card =()=>{
    return (
        <>
        <div className='container-fluid d-flex flex-column'>
        <div className='row'>
        <div className='col-10 mx-auto card_main d-flex  flex-column'>
        <div className="card" style={{width: '18rem'}}>
        <a href="https://vaib1343.github.io/covid/" >
  <img src={cardimg} className="card-img-top" alt="..."/>
  </a>
  <div className="card-body">
    <h5 className="card-title">Corona Meter</h5>
    
  </div>
  
</div>

        </div>

        </div>

        </div>

        </>
    );
}
export default Card;