import React from 'react';
const Header = () => {
    return (
        <section className='h-wrapper'>
          <div className='flexCenter paddings innerWidth h-container' >
            <img src="./estatelogo-transformed.png" alt='logo' width={100} />

            <div className=' flexCenter h-menu'>
              <a href=''>Residencies</a>
              <a href=''>Plots</a>
              <a href=''>Contact Us</a>
              <a href=''>Get Started</a>
              <button className='button'>
                <a href=''>Contact</a>
              </button>
            </div>
          </div>

    </section>
    );
}

export default Header;