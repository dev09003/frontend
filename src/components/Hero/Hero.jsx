import React, { useState } from 'react'
import './Hero.css'
import hero_car from '../Assets/hero_car.png'
import AllParking from '../Popups/Parkings'

export const Hero = () => {
  const [Parkings, setParkings] = useState(false);
  const CloseParking = () => setParkings(false);

  const handleParkingSelect = (parkingId) => {
    // Handle the parking selection here
    console.log('Selected parking:', parkingId);
    // You can add navigation or show more details about the selected parking
  };
 
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>Finding <span>Parking Space</span> Made Easy</h2>
            <p>Discover secure and affordable parking spaces <strong>in your friendly neighborhood.</strong></p>
            <div className="search">
              <input type='text' placeholder='⚲ Enter your location'></input>
              <button type='button' onClick={() => setParkings(true)}>Search</button>
              {Parkings && <AllParking CloseParking={CloseParking} onParkingSelect={handleParkingSelect}/>}
            </div>
            
        </div>
        <div className="hero-right">
            <img src={hero_car} alt="" height="350px" />
        </div>
    </div>
  )
}

export default Hero