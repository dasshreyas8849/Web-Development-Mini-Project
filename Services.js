import React from 'react';
import CardItem from '../CardItem';
import Footer from '../Footer';

import '../../App.css';
import '../Cards.css';
import './Services.css';

export default function Services() {
  return (
    <>
      <h1 className='services'>SERVICES</h1>
      <section className='heading'>
        <h2>Activities we think you would enjoy</h2>
        <div className='services-container'>
          <div className='services-wrapper'> 
          <ul className='services-items'>
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
      </section>

      <section className='heading'>
        <h2>Explore these destinations</h2>
        <div className='services-container'>
          <div className='services-wrapper'> 
          <ul className='services-items'>
            <CardItem 
              src="agra.avif"
              text="Agra"
              label="Architecture"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="andamans.jpg"
              text="Andamans"
              label="Leisure"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="Kolkata-City-Profile.jpg"
              text="Kolkata"
              label="Art and Culture"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="dal-lake-kashmir-in-winter.webp"
              text="Kashmir"
              label="Breathtaking"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="GettyImages-539105384.webp"
              text="Kedarnath"
              label="Religion"
              path="/services/activity"
            ></CardItem>
            
          
            </ul>
          </div>
        </div>
      </section>
      <section className='heading'>
        <h2>Most popular hotels</h2>
        <div className='services-container'>
          <div className='services-wrapper'> 
          <ul className='services-items'>
            <CardItem 
              src="hotel1.jpeg"
              text="Chandys Windy Woods"
              label="Munnar"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="jw-marriott-pune-side-image.jpg"
              text="JW Marriot"
              label="Pune"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="bengaore.jpg"
              text="Taj West End"
              label="Bengaluru"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="spa.jpg"
              text="Gokulam Grand Resort & Spa"
              label="Kumarakom"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="lobby.jpg"
              text="Gift City Club"
              label="Gandhinagar"
              path="/services/activity"
            ></CardItem>
            
           
            
            </ul>
          </div>
        </div>
      </section>
      <section className='heading'>
        <h2>Bestselling Airbnbs</h2>
        <div className='services-container'>
          <div className='services-wrapper'> 
          <ul className='services-items'>
            <CardItem 
              src="darj.jpg"
              text="Singtom Tea Resort"
              label="Darjeeling"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="Leh.jpeg"
              text="Woodyvu Stok House"
              label="Leh"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="k.jpeg"
              text="Alleppey Luxury Houseboat"
              label="Kerala"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="M.jpg"
              text="Himalayan home"
              label="Manali"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="j.jpeg"
              text="The Jackfruit Tree"
              label="Wayanad"
              path="/services/activity"
            ></CardItem>
            
           
            
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  
  
  );
}