import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      
 

      <h1>About our beautiful country</h1>
      <br></br>
      <br></br>
      <br></br>
      <p>One of the oldest civilisations in the world, India is a mosaic of multicultural experiences. With a rich heritage and myriad attractions, the country is among the most popular tourist destinations in the world. It covers an area of 32, 87,263 sq. km, extending from the snow-covered Himalayan heights to the tropical rain forests of the south. As the 7th largest country in the world, India stands apart from the rest of Asia, marked off as it is by mountains and the sea, which give the country a distinct geographical entity.

Fringed by the Great Himalayas in the north, it stretches southwards and at the Tropic of Cancer, tapers off into the Indian Ocean between the Bay of Bengal on the east and the Arabian Sea on the west. As you travel the expanse of the country, you are greeted by diverse nuances of cuisines, faiths, arts, crafts, music, nature, lands, tribes, history and adventure sports. India has a mesmeric conflation of the old and the new. As the bustling old bazaars rub shoulders with swanky shopping malls, and majestic monuments accompany luxurious heritage hotels, the quintessential traveller can get the best of both worlds. Head to the mountains, enjoy a beach retreat or cruise through the golden Thar, India has options galore for all.

 

</p>
<br></br>
<br></br>
<br></br>
      <h1>Check out these epic destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
            src="image.png"
            text="Explore the beautiful backwaters landscape of Kerala"
            label="Adventure"
            path="/services/activity"
            ></CardItem>
            <CardItem 
            src="lakshwa.jpg"
            text="Travel through the Islands of Lakshwadeep in a Private Cruise"
            label="Luxury"
            path="/services/activity"
            ></CardItem>
          </ul>
          <ul className='cards__items'>
            <CardItem 
            src="Goa.jpeg"
            text="Party your hearts out at the clubs and pubs of Goa"
            label="Excitement"
            path="/services/activity"
            ></CardItem>
            <CardItem 
            src="Sundarban_Tiger.jpg"
            text="Spend a day with amongst the flora and fauna of sundarbans"
            label="Mystery"
            path="/services/activity"
            ></CardItem>
            <CardItem 
            src="img-8.jpg"
            text="Ride through the Thar Desert on a guided camel tour and marvel at the mighty palaces of Rajasthan"
            label="Adrenaline"
            path="/services/activity"
            ></CardItem>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;
