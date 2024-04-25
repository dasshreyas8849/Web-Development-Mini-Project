import React from 'react';
import Footer from '../Footer';

export default function Destination() {
  return (
    <>
      <div className='destination'>
      </div>
      <div className='destination-container'>
        <div className='info-wrapper'>
          <h2>"God's Own Country"
</h2>


          <h3>Kerala, India
</h3>
<h4>Things to do in Kerala</h4>
          <ul>
            <li>Float Down Kerala's Mighty Rivers on a Raft
 </li>
            <li>Check Out Munnar's Tea Estates and Gardens
 </li>
            <li>Cruise the Backwaters on a Houseboat
 </li>
            <li>Catch a Kathakali Performance
 </li>
          </ul>
          <h4>Full description</h4>
          <p>Nestled in the southwestern corner of India, Kerala, often referred to as "God's Own Country," is a land of enchanting beauty and rich cultural tapestry. Lush with tropical vegetation, pristine beaches, serene backwaters and a variety of flora and fauna, Kerala is an ideal destination for honeymooners and families. The famous backwaters of Alleppey and Kumarakom, adorned with houseboats gently gliding on tranquil waters, epitomize the unique charm of Kerala.

</p>
        </div>
        
      
        <div className='booking-container'>
          <div className='booking-wrapper'>
            <section className='booking-info'>
              <h5>From</h5>
              <p className='price'>110$</p>
              <p className='per-person'>per person</p>
            </section>
            <button type='button' className='btn-book'>Book now</button>
          </div>
        </div>
      
      </div>
      <Footer />
    </>
  );
}
