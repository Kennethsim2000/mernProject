import React from 'react'
import Navbar from '../components/Navbar.js'
import '../Styles/Sweden.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faGlobe, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Stockholm from '../assets/Stockholm.jpg';
import Gothenburg from '../assets/Gothenburg.jpg';
import Helsingborg from '../assets/Helsingborg.jpg';
import Orebro from '../assets/Orebro.jpg';
import Uppsala from '../assets/Uppsala.jpg';
import Linkoping from '../assets/Linkoping.jpg';
import { useNavigate } from 'react-router-dom';

const Sweden = () => {
  const navigate = useNavigate();
    const navigateToStockholm = () =>{
        navigate('/Sweden/Stockholm');
    };
    const navigateToGothenburg = () =>{
        navigate('/Sweden/Gothenburg');
    };
    const navigateToHelsingborg = () =>{
        navigate('/Sweden/Helsingborg');
    };
    const navigateToOrebro = () =>{
        navigate('/Sweden/Orebro');
    };
    const navigateToUppsala = () =>{
        navigate('/Sweden/Uppsala');
    };
    const navigateToLinkoping = () =>{
        navigate('/Sweden/Linkoping');
    };
  return (
    <div >
        <Navbar/>
        <div className="swedenContainer">
            <h1 style={{ fontSize:'4rem'}}>YOUR SWEDEN TRAVEL AGENCY</h1>
            <br/>
            <p style={{color:'white', fontSize:'2rem'}}>Visit Sweden to experience a mix of elegant towns, peaceful forests and pretty lakes. Book with
            Travellia, and one of our local experts will arrange your trip for you. Enjoy one-to-one service,
            personal recommendations, and 24/7 support during your tour.
            </p>
        </div>
        <div className='swedencontainer2'>
          <span className='inlinesweden' >
            <FontAwesomeIcon icon={faGlobe} className='iconsweden'/>
            <h2 style={{fontSize:'2.5rem', textAlign:'center',display:'inline-block'}}>Overview</h2>
          </span>
          <h1 style={{color:'black', textAlign:'center'}}>Travel to Sweden with Travellia</h1>
          <p className="parasweden" style={{textAlign:'left'}}>The kingdom of Sweden is famed around the world for its high quality of life and standard of living.
            This can be enjoyed by all visitors, even on a short visit!
          </p>
          <p className="parasweden" style={{textAlign:'left'}}>
            There is a lot of choice on the swedish smorgasbord - take your pick from fairy-tale castles like Drottingholm,
            the ABBA museum, thickly forested island landscapes, or simple sit back and relax and enjoy a fika( a moment
            of bread breaking/coffee sipping/merry making/cozy couching all rolled together that is uniquely Swedish).
          </p>
          <p className="parasweden" style={{textAlign:'left'}}>
            There's more to Swedish design than IKEA and H&M - Swedish fashion brands rule the roost in trendy Stockholm. Artistic
            blown glass is another Swedish stand-by. Gastronomy has its own motifs and an icy shot of Vodka is never
            far away. Culinary delights like the meatball in traditional kitchens make room for exquisite seafood attractions
            edgy, upmarket establishments.
          </p>
        </div>

       

        <div className='swedencontainer2'>
          <hr className='styledLine'/>
          <span className='inlinesweden' >
            <FontAwesomeIcon icon={faLocationDot} className='iconsweden'/>
            <h2 style={{fontSize:'2.5rem', textAlign:'center',display:'inline-block'}}>Cities and Regions</h2>
          </span>

          <div className="rowSweden" style={{marginBottom:'0.5rem'}}>

            <div className="divSweden" onClick={navigateToStockholm}>
              <img src={Stockholm} alt='Stockholm' height="250" className='imagesweden'/>
              <div className="overlaySweden">
                <div className="textsweden">Stockholm</div>
              </div>
            </div>

            <div className="divSweden" onClick={navigateToGothenburg}>
              <img src={Gothenburg} alt='Gothenburg'  height="250" className='imagesweden'/>
              <div className="overlaySweden">
                <div className="textsweden">Gothenburg</div>
              </div>
            </div>

            <div className="divSweden" onClick={navigateToHelsingborg}>
              <img src={Helsingborg} alt='Helsingborg' height="250" className='imagesweden'/>
              <div className="overlaySweden">
                <div className="textsweden">Helsingborg</div>
              </div>
            </div>
           
          </div>

          <div className="rowSweden" style={{marginTop:'0'}}>

            <div className="divSweden" onClick={navigateToOrebro}>
              <img src={Orebro} alt='Orebro'height="250" className='imagesweden'/>
              <div className="overlaySweden">
                <div className="textsweden">Orebro</div>
              </div>
            </div>

            <div className="divSweden" onClick={navigateToUppsala}>
              <img src={Uppsala} alt='Uppsala' height="250"  className='imagesweden'/>
              <div className="overlaySweden">
                <div className="textsweden">Uppsala</div>
              </div>
            </div>

            <div className="divSweden" onClick={navigateToLinkoping}>
              <img src={Linkoping} alt='Linkoping' height="250"  className='imagesweden'/>
              <div className="overlaySweden">
                <div className="textsweden">Linkoping</div>
              </div>
            </div>
          </div>


        </div>
      

  
    </div>
  )
}

export default Sweden

