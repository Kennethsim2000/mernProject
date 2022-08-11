import React from 'react'
import Navbar from '../components/Navbar';
import styled from 'styled-components'
import Dropdown from 'react-bootstrap/Dropdown'
import '../Styles/Review.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Grid from "@material-ui/core/Grid";
import Card from 'react-bootstrap/Card'
import Footer from '../components/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Div = styled.div`
margin-top:36px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`
const Div2 = styled.div`
display:flex;
align-items:center;
justify-content:space-around;
flex-direction:row;
background-color:#F7EEEE;
`
const StyledText = styled.p`
color:grey;
font-size:1.5rem;
text-align:left;
`

const StyledButton = styled.button`
border-radius:20px;
padding:6px 36px;
margin-left:8px;
`

const Review = () => {
  return (
    <div>
      <Navbar/>
      <Div>
        <h1 style={{color:'black'}}>CUSTOMER REVIEWS</h1>
        <StyledText>We've had the pleasure of creating unforgettable travel experiences for tens of <br/>
         thousands of clients from over 80 countries, many of whom were recommended to us <br/>
         by friends and family.
        </StyledText>
      </Div>
      <Div2>
        <Dropdown className="dropdown-buttonReviews">
            <Dropdown.Toggle className="dropdownReviews" id="dropdown-button" variant="secondary">
            Destination:                       
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
            <Dropdown.Item href="#/action-1" active>China</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Sweden</Dropdown.Item>
            <Dropdown.Item href="#/action-3">New Zealand</Dropdown.Item>
            <Dropdown.Item href="#/action-4">France</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <div>
        <StyledButton className="button1Reviews">
            <div>
            OLDEST FIRST
            <FontAwesomeIcon icon={faAngleUp} className="iconReviews"/>
            </div>
        </StyledButton>
        <StyledButton className="button2Reviews">
            <div>
            NEWEST FIRST
            <FontAwesomeIcon icon={faAngleDown} className="iconReviews"/>
            </div>
        </StyledButton>
        </div>
      </Div2>

      <div className="reviews">
        <h1 className="headingReviews">WHAT PEOPLE ARE SAYING ABOUT US</h1>
        <StyledText>
            We don't like to brag about ourselves, so here are some nice things our travellors had to say.
        </StyledText>

        <Grid container 
        rowSpacing={{xs:3}}
        spacing={1}
        direction="row"
        justifyContent="center" 
        alignItems="center" 
        >

          <Grid container item xs={3} justifyContent ="center">
            <Card style={{ width: '24rem'}}>
              <Card.Body>
                <Card.Title className="titleReviews">THE WHOLE TRIP WAS LOVELY!</Card.Title>
                <Card.Text className="textReviews">
                  The whole trip was lovely and didn't feel like a tour at all. It just made getting around so
                  easy without feeling too touristy. We just did whatever we felt like doing.
                </Card.Text>
              </Card.Body>
            </Card>
          </Grid>

          <Grid container item xs={3} justifyContent ="center">
            <Card style={{ width: '24rem'}}>
              <Card.Body>
                <Card.Title className="titleReviews">WE LOVE THE SERVICE!</Card.Title>
                  <Card.Text className="textReviews">
                    Please keep the high standard. We love the service, the details for our Anniversary,
                    the recommendations, the quick replies. You are one of the best tour operations in
                    Europe.
                    Thanks!
                  </Card.Text>
              </Card.Body>
            </Card>
          </Grid>

          <Grid container item xs={3} justifyContent ="center">
            <Card style={{ width: '24rem'}}>
              <Card.Body>
                <Card.Title className="titleReviews">VERY WELL ORGANISED</Card.Title>
                <Card.Text className="textReviews">
                  Well thought out tour and recommendations. Very well organized.
                </Card.Text>
              </Card.Body>
            </Card>
          </Grid>

          <Grid container item xs={3} justifyContent ="center">
            <Card style={{ width: '24rem'}}>
              <Card.Body>
                <Card.Title className="titleReviews">EXCELLENT SERVICE</Card.Title>
                <Card.Text className="textReviews">
                  Everything was as described. The whole tour went very smoothly. We had excenllent service from Thor,
                  and Daniel in Thor's absence.
                </Card.Text>
              </Card.Body>
            </Card>
          </Grid>

        </Grid>

        <Grid container 
        columnspacing={{xs:3}}
        spacing={1}
        direction="row"
        justifyContent="center" 
        alignItems="center" 
        className='mt-4'
        >

          <Grid container item xs={3} justifyContent ="center">
            <Card style={{ width: '24rem'}}>
              <Card.Body>
                <Card.Title className="titleReviews">GREAT SPOTS TO VISIT AND GREAT COMPANY</Card.Title>
                <Card.Text className="textReviews">
                  I really appreciate having an itineray that's set for the trip. I've had trips in the past
                  where we didn't plan ahead and it became stressful trying to come up with activities to
                  do. I never feel that way when i travel with Travellia. Great spots to visit and great 
                  company. It was a wonderful trip.
                </Card.Text>
              </Card.Body>
            </Card>
          </Grid>

          <Grid container item xs={3} justifyContent ="center">
            <Card style={{ width: '24rem'}}>
              <Card.Body>
                <Card.Title className="titleReviews">LOOKING FORWARD TO DOING MORE TOURS WITH YOU</Card.Title>
                  <Card.Text className="textReviews">
                    Thank you Travellia for your thoroughly professional service at every stage. Look 
                    forward to doing more tours with you.
                  </Card.Text>
              </Card.Body>
            </Card>
          </Grid>

          <Grid container item xs={3} justifyContent ="center">
            <Card style={{ width: '24rem'}}>
              <Card.Body>
                <Card.Title className="titleReviews">COULDN'T ASK FOR MORE</Card.Title>
                <Card.Text className="textReviews">
                  It was our PERFECT honeymoon! Couldn't ask for more. Our traveling package was perfect for
                  our interests and all staff was very attentive and helpful. Overall great service. Thank 
                  you so much Travellia!
                </Card.Text>
              </Card.Body>
            </Card>
          </Grid>

          <Grid container item xs={3} justifyContent ="center">
            <Card style={{ width: '24rem'}}>
              <Card.Body>
                <Card.Title className="titleReviews">EXCELLENT PERSONALISED SERVICE</Card.Title>
                <Card.Text className="textReviews">
                  Excellent personalized service, detailed information, availability of my consultant. Your 
                  travel offer is just great, with many options for itineraries but even more important for me,
                  the option of self-drive, that is traveling on my own terms more easily and effectively.
                </Card.Text>
              </Card.Body>
            </Card>
          </Grid>
        </Grid>



        <Grid container 
        columnspacing={{xs:3}}
        spacing={1}
        direction="row"
        justifyContent="center" 
        alignItems="center" 
        className='mt-4 mb-4'
        >

          <Grid container item xs={3} justifyContent ="center">
            <Card style={{ width: '24rem'}}>
              <Card.Body>
                <Card.Title className="titleReviews">FANTASTIC EXPERIENCE</Card.Title>
                <Card.Text className="textReviews">
                  Overall it was a fantastic experience and we were able to enjoy a brilliant holiday without the
                  added stress of booking accomodation, cars etc. What we really appreciated were the little touches
                  from Travellia, such as the welcome bag with useful items, the really nice accomodation 
                  that was booked, and all the tips/suggestions of what to do during our time in China. It was
                  a fantastic experience and tour.
                </Card.Text>
              </Card.Body>
            </Card>
          </Grid>

          <Grid container item xs={3} justifyContent ="center">
            <Card style={{ width: '24rem'}}>
              <Card.Body>
                <Card.Title className="titleReviews">AMAZING</Card.Title>
                  <Card.Text className="textReviews">
                    Amazing. The communication and materials we received made our trip easy and everything 
                    was extremely helpful.
                  </Card.Text>
              </Card.Body>
            </Card>
          </Grid>

          <Grid container item xs={3} justifyContent ="center">
            <Card style={{ width: '24rem'}}>
              <Card.Body>
                <Card.Title className="titleReviews">IT WAS EXCELLENT</Card.Title>
                <Card.Text className="textReviews">
                  Accomodation surpassed my expectation! It was excellent.
                </Card.Text>
              </Card.Body>
            </Card>
          </Grid>

          <Grid container item xs={3} justifyContent ="center">
            <Card style={{ width: '24rem'}}>
              <Card.Body>
                <Card.Title className="titleReviews">TRAVELLIA MADE EVERYTHING SO EASY</Card.Title>
                <Card.Text className="textReviews">
                  I couldn't have been happier with my experience! This was my first time traveling abroad 
                  by myself and Travellia made everything so easy. I loved the travel documents, in particular
                  the customized map with noted sites to see along the drive. I absolutely have and will continue
                  to recommend Travellia! I can't wait to book my next adventure with them!
                </Card.Text>
              </Card.Body>
            </Card>
          </Grid>
        </Grid>
      </div>
      <Footer className='mt-0'/>
     
    </div>
  )
}

export default Review
