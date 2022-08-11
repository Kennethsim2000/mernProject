import React from 'react'
import Navbar from '../components/Navbar';
import '../Styles/France.css'
import Paris from "../assets/Paris.jpg";
import Lavender from "../assets/Lavender.jpg";
import Verdon from "../assets/Verdon.jpg";
import Carcassone from "../assets/Carcassone.jpg";
import LoireValley from "../assets/LoireValley.jpg";

const France = () => {
  return (
    <div>
        <Navbar/>
        <div className="FranceContainer">
            <h1 style={{color:'black',fontWeight:'550',fontSize:'3rem'}}>The 10 most beautiful places to visit in France</h1>
            <div className="FrancePlaces">
                <ol>
                    <li className="titleFrance">Paris</li>
                    <p className="paraFrance">The city of Paris is awash with world-class landmarks that need no introduction - the 
                        louvre, Notre Dame, the Arc de Triomphe, and Sacre-coeur among them, along with a trove of
                        smaller specialist musuems and galleries. More than six million people visit the Eiffel tower
                        annually, and a visit is magical, whether you come for an evening ascent amid twinkling lights
                        over a flute of Champagne or a lazy lunch in one of its restaurants.
                    </p>
                    <div className="img-wrapper-france">
                        <img className="imgFrance" src={Paris} alt='Paris' height='450rem' width='100%'/>
                    </div>
                    <p className="paraFrance" style={{marginTop:'1rem'}}>
                        But a just-as-integral part of Paris' attraction is simply flanerie- city strolling without
                        any particular goal in mind. You'll discover lesser-known sights, from laid-back parks and hidden
                        squares to vibrant street art and cute bars and brasseries, with plenty of surprises along the way.
                    </p>


                    <li className="titleNZ">Provence:land of lavender</li>
                    <p className="paraFrance">Every summer, the seemingly endless ocean of lavender fields makes Provence one of the most beautiful
                        - not to mention, fragrant - places to visit in France. The heavenly scented crop can be found almost
                        everywhere in the region during this time. That said, most of the most scenic spots to enjoy it include
                        the Valensole Plateau, the Sault Plateau, and the Luberon Valley.
                    </p>
                    <div className="img-wrapper-france">
                        <img className="imgFrance" src={Lavender} alt='Lanvender' height='450rem' width='100%'/>
                    </div>
                    <p className="paraFrance" style={{marginTop:'1rem'}}>
                        Along with the local honeybees, these beautiful lavender fields are lovingly tended by the monks that 
                        live in the abbey. In fact, visitors can even stay with them and enjoy a serene spiritual retreat.
                    </p>


                    <li className="titleNZ">Gorges du Verdon:the Grand Canyon of France</li>
                    <p className="paraFrance">"Nestled in the Provence-Alpes-Cote dAzur region of southeastern France, the 700-meter
                        -deep Gorges du Verdon is a truly breathtaking sight to behold. Carved by the Verdon River,
                        the plunging limestone canyon is the largest in Europe. It is also a hotspot for andrenaline-fuelled
                        activities and watersport.
                    </p>

                    <div className="img-wrapper-france">
                        <img className="imgFrance" src={Verdon} alt='Verdon' height='450rem' width='100%'/>
                    </div>

                    <p className="paraFrance" style={{marginTop:'1rem'}}>Cruising along the 25km-long stretch of mesmerizing turquoise waters that
                    flow into the artificial Lac de Sainte-Croix is a truly unforgettable experience. More adventurous travelers,
                    however, might prefer to brave white-water rafting along the rapids. A more relaxing day can be spent
                    hiking around the 100km rim of the canyon or hopping on horseback and weaving your way through the vertical
                    limestone cliffs. Whatever you do, though, be sure to have your camera at the ready. After all, this is one
                    of the most breathtaking places to visit in France.
                    </p>
                    
                    <li className="titleNZ">Carcassonne</li>
                    <p className="paraFrance">Perched on a rocky hilltop and bristling with zigzag battlements,
                    stout walls and spiky turrets, the fortified city of Carcassonne in the Languedoc looks like
                    something out of a children's storybook. A Unesco World Heritage site since 1997, it's most 
                    people idea of the perfect medieval castle - that first glimpse of it is enough to make your hair
                    stand on end.
                    </p>

                    <div className="img-wrapper-france">
                        <img className="imgFrance" src={Carcassone} alt='Carcassone' height='450rem' width='100%'/>
                    </div>

                    <p className="paraFrance" style={{marginTop:'1rem'}}>
                        To properly savor this fairy-tale walled city, linger at dusk after the crowds have left,
                        when the old town belongs to its 100 or so inhabitants and the few visitors staying at the
                        handful of lovely hotels within its ramparts. Don't forget to look back when you leave to view
                        the old city, beautifully illuminated, glowing in the warm night.
                    </p>
                    <li className="titleNZ">The Loire Valley:the garden of France</li>
                    <p className="paraFrance">Often referred to as the garden of France, the Loire Valley was once
                    the stomping ground of French royalty and nobility. Today, however, it is one of the most iconic 
                    places to visit in France and open to all.
                    </p>

                    <div className="img-wrapper-france">
                        <img className="imgFrance" src={LoireValley} alt='LoireValley' height='450rem' width='100%'/>
                    </div>

                    <p className="paraFrance" style={{marginTop:'1rem'}}>With its stunning French architecture and surrounding deer-filled park, 
                    Chateau of Chambord, for instance, is considered to be one of the most beautiful in the valley. The 
                    Chateau de Chenonceau, meanwhile, is revered for its unique mix of Gothic and Renaissance architecture 
                    which hovers over the Cher River. And the fairytale-like Chateau de Sully-sur-Loire, which has played host 
                    to several famous historical figures including joan of Arc and Louis XIV, offers a more medieval beauty.
                    </p>
                    
                </ol>
            </div>
           
        </div>
      
    </div>
  )
}

export default France
