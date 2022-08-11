import React from 'react'
import  '../Styles/NewZealand.css';
import Navbar from '../components/Navbar';
import NewZealand2 from "../assets/NewZealand2.jpg";
import Fiordland from "../assets/Fiordland.jpg";
import JosefGlacier from "../assets/JosefGlacier.jpg";
import BayIsland from "../assets/BayIslands.jpg";
import GlowCave from "../assets/GlowwormCave.jpg";

const NewZealand = () => {
  return (
    <div>
        <Navbar/>
        <div className="NewZealandContainerCenter">
            <h1 style={{color:'black', fontWeight:'bold'}}>NEW ZEALAND TRAVEL GUIDE</h1>
            <img src={NewZealand2} alt='Mountain' height='450rem' width='100%'/>
        </div>
        <div className="NewZealandContainerStart">
            <p className="paraNew">New Zealand's name inspires pictures of mountains, 
            glaciers, forests, pristine lands, and lots and lots of sheep.
            </p>
            <p className="paraNew">The country is the adventure capital of the world. Hiking, skydiving, caving, bungy jumping,
                skiing - everything here is geared towards getting you outside and doing something incredible.
            </p>
            <p className="paraNew">Backpacking New Zealand is one of the most popular activities in the world, with thousands of people 
                making their way there on their round the world trip (backpackers sweep up those working holiday visas!)
            </p>
            <p className="paraNew">Use this New Zealand travel guide to plan the adventure of the lifetime - and on a budget.</p>
            <h2 className="headingNZ"><span>Top 5 things to and Do in New Zealand</span></h2>

            <div className="flip-container">
                <div className="card1">
                    <div className="front">
                        <img src={Fiordland} alt='Fiordland' height='350rem' width='250rem' />
                    </div>
                    <div className="back">Fiordland National park is located in the southwest of New 
                    Zealand's South Island.It has three of New Zealand's 'great walks', the Milford, Kepler
                    and Routeburn Tracks.  You can walk along the sandy Milford shore for perfect views of
                    mitre Peak.
                    </div>
                </div>
           
                 <div className="card2">
                     <div className="front">
                        <img src={BayIsland} alt='BayIsland' height='350rem' width='250rem' />
                    </div>
                    <div className="back">
                        North of Auckland, Bay of Islands has some of the best opportunities for dolphin and 
                        whale watching, relaxing on the beach, swimming, boating and eating seafood.
                        This area is a popular summer getaway destination for Aucklanders.
                    </div>
                   
                </div>
                 <div className="card3">
                    <div className="front">
                        <img src={JosefGlacier} alt='JosefGlacier' height='350rem' width='250rem' />
                    </div>
                    <div className="back">The Franz Josef Glacier is a 12-kilometre-long temperate maritime
                    glacier 20km kilometres to the south. With a heli-hike, you get a scenic flight over the
                    glacier and get to go to remote areas where you can explore on foot.
                    </div>
                </div>

                <div className="card4">
                     <div className="front">
                        <img src={GlowCave} alt='GlowCave' height='350rem' width='250rem' />
                    </div>
                    <div className="back">Explore the Waitomo Glowworm Caves in sheer darkness with nothing 
                    but the glow of glowworms to guide your way. It's an excting activity as you float down rivers
                    and jump over waterfalls and watch the "starry sky" in the cave. 
                    </div>
                </div>  
                
            </div>

            <h2 className="headingNZ"><span>Other Things to see and Do in New Zealand</span></h2>
            <ol>
                <li className="titleNZ">Try Bungy jumping</li>
                <p>Any adrenaline seeker worth their salt will do the 500ft Nevis Bungy Jump outside of Queenstown.
                    If that's too high, there are smaller ones in Auckland and Queenstown. The price of adventure 
                    isn't cheap, however, with a single jump at Nevis costing 275 NZD.
                </p>
                <li className="titleNZ">Visit Abel Tasman National park</li>
                <p>Located on the South Island, this national park looks like something you'd find in Asia, with its
                    turquoise blue water, dense jungles and warm temperatures. There are many multi-day hiking trails 
                    and beautiful sea kayaking throughout the park. Entry is free, though you will need to pay 15 NZD
                    for a campsite if you plan on staying over. Huts are also available for 40 NZD per night.
                </p>
                <li className="titleNZ">Go dolphin and whale watching</li>
                <p>Whether you go from the Bay of Islands, Auckland, or somewhere on the south island, the 
                    country is within the migratory route for many of these creatures and you're bound to see 
                    lots of them no matter when you go(though October-March is the best time). Sperm whales,
                    orcas, and humpback whales all call the region home. Expect to pay between 60-150 NZD per 
                    person for a tour.
                </p>
                <li className="titleNZ">Explore Wellington Botanic Gardens</li>
                <p>Of all the beautiful gardens throughout the country, this is perhaps the most popular. There
                    is a vast native forest, an international plant collection, a rose garden, and a landscaped
                    area- complete with duck pond, sculptures, a playground, and a cafe. Created in 1868, the park 
                    spans a massive 61 acres. Admission is free.
                </p>
                <li className="titleNZ">Ride the Christchurch gondola</li>
                <p>If you are in christchurch, take the gondola ride up Mount Vaendish. The ride is 10 minutes
                    and offers the best view of the city. There is a restaurant at the top if you want to grab a
                    bite to eat while you enjoy the scenery too. Most people walk back down(you can also walk up if 
                    you don't mind the exercise. It takes around 45 minutes) Tickets are 30 NZDround trip. 
                </p>
                
            </ol>
        </div>
        
      
    </div>
  )
}

export default NewZealand
