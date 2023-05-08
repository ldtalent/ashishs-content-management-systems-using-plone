import React from 'react';
import { Container } from 'semantic-ui-react';

const StepsViews = (props) => {
  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '30%', textAlign: 'center', margin: '0 1%' }}>
          <img style={{ width: '100%', height: 'auto' }} src="https://images.unsplash.com/photo-1540908687994-44cd70430925?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="Image 1" />
          <h2 style={{ fontSize: '24px', margin: '10px 0px' }}>Choose your Event</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.5' }}>There are many exciting party events to choose from, each with its own unique vibe and atmosphere. Whether you prefer the glamour and sophistication of a black-tie gala, the laid-back fun of a backyard barbecue, or the thrill of a costume party, there is something for everyone.</p>
        </div>
        <div style={{ width: '30%', textAlign: 'center', margin: '0 1%' }}>
          <img style={{ width: '100%', height: 'auto' }} src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="Image 2" />
          <h2 style={{ fontSize: '24px', margin: '10px 0px' }}>Register Online</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.5' }}>Registering online for a party event is a convenient and efficient way to secure your spot and ensure that you don't miss out on the fun. Simply visit the event's website or social media page and look for the registration link or form. Fill out the required informationy .</p>
        </div>
        <div style={{ width: '30%', textAlign: 'center', margin: '0 1%' }}>
          <img style={{ width: '100%', height: 'auto' }} src="https://images.unsplash.com/photo-1564613469739-c78f970f9c17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1694&q=80" alt="Image 3" />
          <h2 style={{ fontSize: '24px', margin: '10px 0px' }}>Reach Enjoy</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.5' }}>Getting to the event location and enjoying the party is all part of the fun! If the party is being held at a venue, be sure to check the address and plan your route in advance. Consider using a rideshare service or public transportation to avoid the hassle of parking, especially if alcohol will be served at the event.</p>
        </div>
      </div>
    </div>
  );
};

export default StepsViews;
