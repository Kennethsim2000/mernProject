import React from 'react';
import Navbar from '../components/Navbar';
import Shanghai from "../assets/Shanghai.jpg";
import Guangzhou from "../assets/Guangzhou.jpg";
import Hangzhou from "../assets/Hangzhou.jpg";
import Beijing from "../assets/Beijing.jpg";
import Hongkong from "../assets/Hongkong.jpg";
import Guilin from "../assets/Guilin.jpg";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Styles/China.css'
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const China = () => {
    const navigate = useNavigate();
    const navigateToShanghai = () =>{
        navigate('/China/Shanghai');
    };
    const navigateToGuangzhou = () =>{
        navigate('/China/Guangzhou');
    };
    const navigateToHangzhou = () =>{
        navigate('/China/Hangzhou');
    };
    const navigateToBeijing = () =>{
        navigate('/China/Beijing');
    };
    const navigateToHongkong = () =>{
        navigate('/China/Hongkong');
    };
    const navigateToGuilin = () =>{
        navigate('/China/Guilin');
    };
  return (
    <div style={{marginBottom:'2rem'}}>
        <Navbar/>
        <div className="containerChina">
            <h2 className="headingChina">Popular Destinations</h2>
            <p className="paraChina" >
            Excursions in China with local guides are available in the most popular cities of the country.
            English-speaking guides will help you get the best experience from your trip in china. More 
            than 515 attractions are currently available for online booking
            </p>


            <Container className="innerContainerChina">

                <Row className="rowChina" >
                    <Col  className="columnChina"  onClick={navigateToShanghai}>
                        <img src={Shanghai} alt='Shanghai'height='350px' width='360px'  className='ChinaIMG'/>
                        <span className='overlayChina' >
                         Shanghai
                        </span>
                    </Col>
                    <Col className="columnChina" onClick={navigateToGuangzhou}>
                    <img src={Guangzhou} alt='Guangzhou' height='350px' width='360px' className='ChinaIMG'/>
                        <span className='overlayChina' >
                         Guangzhou
                        </span>
                    </Col>
                    <Col className="columnChina" onClick={navigateToHangzhou}>
                    <img src={Hangzhou} alt='Hangzhou' height='350px' width='360px' className='ChinaIMG'/>
                        <span className='overlayChina' >
                         Hangzhou
                        </span>
                    </Col>
                </Row>

                <Row className="rowChina" >
                    <Col  className="columnChina"  onClick={navigateToBeijing}>
                        <img src={Beijing} alt='Beijing'height='350px' width='360px'  className='ChinaIMG'/>
                        <span className='overlayChina' >
                         Beijing
                        </span>
                    </Col>
                    <Col className="columnChina" onClick={navigateToHongkong}>
                    <img src={Hongkong} alt='hongkong' height='350px' width='360px' className='ChinaIMG'/>
                        <span className='overlayChina' >
                         Hongkong
                        </span>
                    </Col>
                    <Col className="columnChina" onClick={navigateToGuilin}>
                    <img src={Guilin} alt='Guilin' height='350px' width='360px' className='ChinaIMG'/>
                        <span className='overlayChina' >
                         Guilin
                        </span>
                    </Col>
                </Row>


                {/* <Row classname="rowChina" >
                    <Col style={{ display:'flex', justifyContent:'center'}} className="columnChina" onClick={navigateToBeijing}>
                        <img src={Beijing} alt='Beijing' height='350rem' width='360rem' className='ChinaIMG'/>
                        <span className='overlayChina' >
                         Beijing
                        </span>
                    </Col>

                    <Col style={{ display:'flex', justifyContent:'center'}} className="columnChina" onClick={navigateToHongkong}>
                    <img src={Hongkong} alt='Hongkong' height='350rem' width='360rem' className='ChinaIMG'/>
                        <span className='overlayChina' >
                         Hongkong
                        </span>
                    </Col>

                    <Col style={{ display:'flex', justifyContent:'center'}} className="columnChina" onClick={navigateToGuilin}>
                    <img src={Guilin} alt='Guilin' height='350rem' width='360rem' className='ChinaIMG'/>
                        <span className='overlayChina' >
                         Guilin
                        </span>
                    </Col>
                </Row> */}

                
            </Container>
            

        </div>
    
       
    </div>
  )
}

export default China

