import React from 'react'
import Beach from "../assets/Beach.jpg";
import '../Styles/Booking.css';
import China from "../assets/China.jpg";
import Sweden from "../assets/Sweden.jpg";
import NewZealand from "../assets/NewZealand.jpg";
import France from "../assets/France.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faClock, faCalendar, faStar,faStarHalf } from "@fortawesome/free-solid-svg-icons";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const booking = () => {
  return (
    <div>
        <Navbar/>
        <div>
        <img src={Beach} alt='Beach' className="coverpic" height='550rem' width='100%'/>
        </div>
        <div className="shopcart" style={{marginBottom:'2rem'}}>
            <h1 className="bookingHeading">Travel Destinations</h1>
            <div className="booking">
                <img src={China} alt='China' className="coverpic" height='300rem' width='350rem'/>
                <div className="informationBook">
                    <h2>China</h2>
                    <p>Enjoy a 10 days trip to china, exploring cities such as Shanghai,Guangzhou, Hangzhou,
                        Beijing, Hongkong and Guilin.
                    </p>
                    <span className='inlineBook' >
                        <FontAwesomeIcon icon={faClock} className='iconBook'/>
                        <h2 style={{fontSize:'1.4rem', textAlign:'center',display:'inline-block'}}>10 Days and 9 Nights</h2>
                    </span>
                    <span className='inlineBook' >
                        <FontAwesomeIcon icon={faCalendar} className='iconBook'/>
                        <h2 style={{fontSize:'1.4rem', textAlign:'center',display:'inline-block'}}>Availability: March-November</h2>
                    </span>
                    <span className='inlineBook' >
                        <FontAwesomeIcon icon={faStar} className='ratingChecked '/>
                        <FontAwesomeIcon icon={faStar} className='ratingChecked'/>
                        <FontAwesomeIcon icon={faStar} className='ratingChecked'/>
                        <FontAwesomeIcon icon={faStar} className='ratingChecked'/>
                        <FontAwesomeIcon icon={faStar} className='iconBook'/>
                    </span>
                    <button className="bookingBut">
                        Add to cart
                    </button>
                </div>
               
            </div>

            <div className="booking" style={{marginTop:'1rem'}}>
                <img src={Sweden} alt='Sweden' className="coverpic" height='320rem' width='350rem'/>
                <div className="informationBook">
                    <h2>Sweden</h2>
                    <p>
                        Trust our local specialsts to plan a trip of a lifetime for you. From start to finish,
                        your journey will be a seamless adventure peppered with amazing attractions and 
                        hand-picked accomodations.
                    </p>
                    <span className='inlineBook' >
                        <FontAwesomeIcon icon={faClock} className='iconBook'/>
                        <h2 style={{fontSize:'1.4rem', textAlign:'center',display:'inline-block'}}>15 Days and 14 Nights</h2>
                    </span>
                    <span className='inlineBook' >
                        <FontAwesomeIcon icon={faCalendar} className='iconBook'/>
                        <h2 style={{fontSize:'1.4rem', textAlign:'center',display:'inline-block'}}>Availability: All year round</h2>
                    </span>
                    <span className='inlineBook' >
                        <FontAwesomeIcon icon={faStar} className='ratingChecked '/>
                        <FontAwesomeIcon icon={faStar} className='ratingChecked'/>
                        <FontAwesomeIcon icon={faStar} className='ratingChecked'/>
                        <FontAwesomeIcon icon={faStar} className='ratingChecked'/>
                        <FontAwesomeIcon icon={faStar} className='ratingChecked'/>
                    </span>
                    <button className="bookingBut">
                        Add to cart
                    </button>
                </div>
               
            </div>


            <div className="booking" style={{marginTop:'1rem'}}>
                <img src={NewZealand} alt='NewZealand' className="coverpic" height='320rem' width='350rem'/>
                <div className="informationBook">
                    <h2>New Zealand</h2>
                    <p>
                        Visit places such as Fiordland National Park, Bay Of Islands, Franz Josef Glacier,
                        and Waitomo Glowworm Caves during these 8 days fun-filled adventure.
                    </p>
                    <span className='inlineBook' >
                        <FontAwesomeIcon icon={faClock} className='iconBook'/>
                        <h2 style={{fontSize:'1.4rem', textAlign:'center',display:'inline-block'}}>8 Days and 7 Nights</h2>
                    </span>
                    <span className='inlineBook' >
                        <FontAwesomeIcon icon={faCalendar} className='iconBook'/>
                        <h2 style={{fontSize:'1.4rem', textAlign:'center',display:'inline-block'}}>Availability: July-November</h2>
                    </span>
                    <span className='inlineBook' >
                        <FontAwesomeIcon icon={faStar} className='ratingChecked '/>
                        <FontAwesomeIcon icon={faStar} className='ratingChecked'/>
                        <FontAwesomeIcon icon={faStar} className='ratingChecked'/>
                        <FontAwesomeIcon icon={faStar} className='ratingChecked'/>
                        <FontAwesomeIcon icon={faStarHalf} className='ratingChecked'/>
                    </span>
                    <button className="bookingBut">
                        Add to cart
                    </button>
                </div>
            </div>

            <div className="booking" style={{marginTop:'1rem'}}>
                <img src={France} alt='France' className="coverpic" height='320rem' width='350rem'/>
                <div className="informationBook">
                    <h2>France</h2>
                    <p>
                        The best time to visit France is during its shoulder seasons- from April to June and 
                        September to November! During this time, you'll encounter fewer tourists, have an easier
                        time finding cheap flights from the US, and hotels typically lower their rates.
                    </p>
                    <span className='inlineBook' >
                        <FontAwesomeIcon icon={faClock} className='iconBook'/>
                        <h2 style={{fontSize:'1.4rem', textAlign:'center',display:'inline-block'}}>9 Days and 8 Nights</h2>
                    </span>
                    <span className='inlineBook' >
                        <FontAwesomeIcon icon={faCalendar} className='iconBook'/>
                        <h2 style={{fontSize:'1.4rem', textAlign:'center',display:'inline-block'}}>Availability: All Year Round</h2>
                    </span>
                    <span className='inlineBook' >
                        <FontAwesomeIcon icon={faStar} className='ratingChecked '/>
                        <FontAwesomeIcon icon={faStar} className='ratingChecked'/>
                        <FontAwesomeIcon icon={faStar} className='ratingChecked'/>
                        <FontAwesomeIcon icon={faStar} className='ratingChecked'/>
                        <FontAwesomeIcon icon={faStarHalf} className='ratingChecked'/>
                    </span>
                    <button className="bookingBut">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
        <Footer />
     
    </div>
  )
}

export default booking
