import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className='f-wrapper'>
            <div className='paddings innerWidth flexCenter f-container'>
                <div className='flexColStart f-left'>
                    <img src='./estatelogo-transformed.png' alt='' width={120} />
                    <span className='secondaryText'>
                        Discover your dream home with YASH ESTATES where real estate dreams turn into reality
                    </span>
                </div>  
                <div className='flexColStart f-right'>
                    <span className='primaryText'>Information</span>
                    <span className='secondaryText'>167 Dollars colony, Bangalore </span>
                    
                    <div className='flexCenter f-menu'>
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>


                    </div>
                </div> 
            </div>

        </section>
        

    );
}

export default Footer;