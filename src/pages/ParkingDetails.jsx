import React, { useState } from 'react';
import './ParkingDetails.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import parkingSpot1 from '../components/Assets/parking1.webp';
import parkingSpot2 from '../components/Assets/parking2.jpg';
import parkingSpot3 from '../components/Assets/parking3.webp';

const ParkingDetails = () => {
  const [isBooked, setIsBooked] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  const parkingLocation = "DELTA 2, NEAR HOPE HOSPITAL, Greater Noida, Uttar Pradesh";

  const handleBooking = async (e) => {
    e.preventDefault();
    const date = new Date(e.target.elements[0].value);
    const time = e.target.elements[1].value;
    const duration = e.target.elements[2].value;
    
    // Format date to Indian style (DD-MM-YYYY)
    const formattedDate = date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    // Convert 24hr time to 12hr format with AM/PM
    const timeArr = time.split(':');
    const hours = parseInt(timeArr[0]);
    const minutes = timeArr[1];
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedTime = `${formattedHours}:${minutes} ${ampm}`;
    
    setBookingDetails({ 
      date: formattedDate, 
      time: formattedTime, 
      duration 
    });
    setIsBooked(true);
  };

  const handleDirections = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          const mapsUrl = `https://www.google.com/maps/dir/${userLat},${userLng}/${encodeURIComponent(parkingLocation)}`;
          window.open(mapsUrl, '_blank');
        },
        (error) => {
          const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(parkingLocation)}`;
          window.open(mapsUrl, '_blank');
        }
      );
    } else {
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(parkingLocation)}`;
      window.open(mapsUrl, '_blank');
    }
  };

  return (
    <div className="parking-details">
      <div className="parking-header">
        <h1>DELTA 2, NEAR HOPE HOSPITAL</h1>
        <div className="location">
          <p>Greater Noida, Uttar Pradesh</p>
        </div>
      </div>

      <div className="parking-info">
        <div className="info-section">
          <h2>Parking Details</h2>
          <div className="details-grid">
            <div className="detail-item">
              <h3>Rate</h3>
              <p>Rs. 20/hour</p>
            </div>
            <div className="detail-item">
              <h3>Tier</h3>
              <p>Tier 2</p>
            </div>
            <div className="detail-item">
              <h3>Available Spots</h3>
              <p>4-6</p>
            </div>
            <div className="detail-item">
              <h3>Security</h3>
              <p>24/7 CCTV</p>
            </div>
          </div>
          
          <div className="parking-images-carousel">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <img src={parkingSpot1} alt="Parking View 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={parkingSpot2} alt="Parking View 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={parkingSpot3} alt="Parking View 3" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="booking-section">
          {!isBooked ? (
            <>
              <h2>Book Your Spot</h2>
              <form className="booking-form" onSubmit={handleBooking}>
                <div className="form-group">
                  <label>Date</label>
                  <input type="date" required />
                </div>
                <div className="form-group">
                  <label>Time</label>
                  <input type="time" required />
                </div>
                <div className="form-group">
                  <label>Duration (hours)</label>
                  <input type="number" min="1" max="24" required />
                </div>
                <button type="submit" className="book-button">Book Now</button>
              </form>
            </>
          ) : (
            <div className="booking-confirmation">
              <h2>Congratulations! 🎉</h2>
              <p>Your parking spot is booked for {bookingDetails.time} on {bookingDetails.date} 
                 for {bookingDetails.duration} hours.</p>
              <p>Contact owners : 1234567890</p> <br/>
                
              <button 
                onClick={handleDirections}
                className="direct-button"
              >
                Directions
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParkingDetails;