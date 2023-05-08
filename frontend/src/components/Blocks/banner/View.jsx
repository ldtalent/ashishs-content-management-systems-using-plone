import React from 'react';
import { Container } from 'semantic-ui-react';

const BannerView = (props) => {
  return (
    <div className="full-width" style={{ marginTop: '-30px' }}>
      <div
        className="banner-custom"
        style={{
          height: '90vh',
          width: '100vw',
          overflow: 'hidden',
        }}
      >
        <div className="banner-overlay" style={{ background: 'rgba(0,0,0,.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
          <div className="banner-content" style={{ ' textAlign': 'center', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <h1 className="title" style={{ fontSize: '5em', textAlign: 'center' }}>
              We create Moments
            </h1>
            <p className="tagline-custom">Life is a party, and we're here to help you celebrate!</p>
            <button className="custom-banner-button">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerView;
