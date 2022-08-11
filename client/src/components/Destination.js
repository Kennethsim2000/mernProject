import React from 'react'
import Card from 'react-bootstrap/Card'
import China from "../assets/China.jpg"
import Sweden from "../assets/Sweden.jpg";
import NewZealand from "../assets/NewZealand.jpg";
import France from "../assets/France.jpg";
import './DestinationStyle.css';
import { useNavigate } from 'react-router-dom';

const Destination = () => {
  const navigate = useNavigate();
    const navigateToChina = () =>{
        navigate('/China');
    };
    const navigateToSweden = () =>{
      navigate('/Sweden');
    };
    const navigateToNewZealand = () =>{
      navigate('/NewZealand');
    };
    const navigateToFrance = () =>{
      navigate('/France');
    };
  return (
    <div className="d-flex justify-content-around mt-lg-5 mb-lg-5">
      <Card style={{ width: '20rem'}} className= 'card-style' role="button" onClick={navigateToChina} >
        {/* <Card.Link href='/China'> */}
        <Card.Img variant="top" src={China} />
        <Card.Body>
          <Card.Title>China</Card.Title>
          <Card.Text>
            Tours to China are held in a variety of exciting ways - from the dusty deserts of Central 
            Asia to tropical beaches stretching along the Pacific Ocean.
          </Card.Text>
        </Card.Body>
        {/* </Card.Link> */}
      </Card>


      <Card style={{ width: '20rem' }} className= 'card-style' onClick={navigateToSweden}>
        <Card.Img variant="top" src={Sweden}/>
        <Card.Body>
          <Card.Title>Sweden</Card.Title>
          <Card.Text>
            Visit Sweden to experience a mix of elegant towns, peaceful forests and pretty lakes.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '20rem' }} className= 'card-style' onClick={navigateToNewZealand}>
        <Card.Img variant="top" src={NewZealand} />
        <Card.Body>
          <Card.Title>New Zealand</Card.Title>
          <Card.Text>
            New Zealand's amazing National Parks, glacier trekking and many extreme sports make it
            a beautiful place for those who week adventure and adrenaline!
          </Card.Text>
        </Card.Body>
      </Card>

      
      <Card style={{ width: '20rem' }} className= 'card-style'onClick={navigateToFrance}>
        <Card.Img variant="top" src={France} />
        <Card.Body>
          <Card.Title>France</Card.Title>
          <Card.Text>
            The city is full of incredible history, architecture, art, charm, and 
            distinct cuisine. Whether you have a day, a week, or a month to explore, Paris is a travel experience
            in its own.
          </Card.Text>
        </Card.Body>
      </Card>  

</div>
  )
}

export default Destination
