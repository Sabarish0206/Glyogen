import React from 'react';

const AddressSection = () => {
  // Define the content
  const office = {
    
    address: [
      "Glyogen Clinical Research",
      "No :20 Maruthupandiyar 1st street, Narimedu,",
      "Madurai - 625002"
    ],
    // Regular link for the "Get Directions" button
    mapLink: "https://www.google.com/maps/place/Maruthupandiyar+1st+st,+Narimedu,+Madurai,+Tamil+Nadu+625002/@9.941913,78.134517,17z/data=!4m6!3m5!1s0x3b00c5c361955b2d:0x3953e5d09f37963d!8m2!3d9.9419126!4d78.1345167!16s%2Fg%2F1tdy45w3?hl=en&entry=ttu",
    // EMBED URL for the iframe (REPLACE with your actual embed src if different)
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.740889981881!2d78.1345167!3d9.9419126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5c361955b2d%3A0x3953e5d09f37963d!2sMaruthupandiyar%201st%20st%2C%20Narimedu%2C%20Madurai%2C%20Tamil%20Nadu%20625002!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
  };

  // Define colors based on the theme
  const THEME_COLOR = '#022A70'; // Dark Blue
  const GOLD_COLOR = 'var(--color-gold, #FFD700)'; // Accent color
  const DARK_TEXT_COLOR = '#333333';
  const LIGHT_BG = '#f5f5f5'; // Subtle background color

  // --- CSS with Media Queries for Responsiveness (UPDATED) ---
  const responsiveCSS = `
    /* Base Section Wrapper (Full Width Background) */
    .address-wrapper {
      padding: 80px 0;
      background-color: ${LIGHT_BG}; 
      font-family: 'Arial, sans-serif';
      box-sizing: border-box;
      color: ${DARK_TEXT_COLOR};
    }

    /* Main Content Container (Centered & Max-Width) */
    .address-content-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 40px; 
      display: flex; /* TWO COLUMN LAYOUT */
      justify-content: space-between;
      align-items: center;
      gap: 50px;
    }

    /* Left Side: Address Details */
    .address-details-side {
      flex: 1; 
      text-align: left;
    }
    
    /* Right Side: Map Container */
    .address-map-side {
      flex: 1; 
      display: flex;
      justify-content: center;
      align-items: center;
    }

    /* Primary Heading */
    .address-details-side h2 {
      font-size: 3em; 
      font-weight: 900;
      margin-bottom: 10px; 
      color: ${THEME_COLOR};
      line-height: 1.1;
      text-transform: uppercase;
    }
    
    /* Address Text */
    .address-text {
      margin-top: 20px;
      padding: 20px 0;
      border-left: 5px solid ${GOLD_COLOR}; /* Gold line accent */
      padding-left: 20px;
    }

    .address-line {
      font-size: 1.2em;
      line-height: 1.8;
      margin-bottom: 5px;
      color: ${DARK_TEXT_COLOR};
    }
    
    /* Map Button */
    .map-button {
      margin-top: 35px;
      padding: 12px 30px;
      background-color: ${THEME_COLOR};
      color: white;
      text-decoration: none;
      font-weight: bold;
      border-radius: 6px;
      transition: all 0.3s ease;
      border: 2px solid ${THEME_COLOR};
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      display: inline-block;
      font-size: 1.0em;
    }

    .map-button:hover {
      background-color: ${GOLD_COLOR};
      color: ${THEME_COLOR};
      border-color: ${GOLD_COLOR};
      transform: translateY(-2px);
    }
    
    /* Map Container for IFRAME */
    .map-container {
        width: 100%;
        max-width: 500px;
        height: 350px; /* Fixed height for the map */
        border-radius: 10px;
        overflow: hidden; /* Hide anything outside the border radius */
        box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    }
    
    /* Responsive IFRAME Styling */
    .map-container iframe {
        width: 100%;
        height: 100%;
        border: none;
        display: block;
    }
    
    /* =================================================== */
    /* NEW: Laptop L (1440px and up) */
    /* =================================================== */
    @media (min-width: 1400px) {
        .address-wrapper {
            padding: 100px 0;
        }
        .address-content-container {
            max-width:  80%;
            padding: 0 60px;
            gap: 80px;
        }
        .address-details-side h2 {
            font-size: 4em;
        }
        .address-line {
            font-size: 1.3em;
        }
        .map-button {
            padding: 14px 35px;
            font-size: 1.1em;
        }
        .map-container {
            max-width: 100%;
            height: 420px; /* Taller map */
        }
    }

    /* =================================================== */
    /* NEW: 4K/Extra-Large Screens (2560px and up) */
    /* =================================================== */
    @media (min-width: 2560px) {
        .address-wrapper {
            padding: 140px 0;
        }
        .address-content-container {
            max-width: 2000px;
            padding: 0 100px;
            gap: 120px;
        }
        .address-details-side h2 {
            font-size: 5.5em; /* Significantly larger heading */
        }
        .address-line {
            font-size: 1.8em; /* Significantly larger text */
        }
        .map-button {
            padding: 20px 50px;
            font-size: 1.4em;
        }
        .map-container {
            max-width: 1000px;
            height: 550px; /* Much larger map */
        }
    }


    /* --- Media Query for TABLET (≤950px) - Stacked Layout --- */
    @media (max-width: 950px) {
      .address-wrapper {
        padding: 60px 0;
      }
      .address-content-container {
        flex-direction: column; /* Stack columns */
        align-items: center;
        padding: 0 30px;
      }
      .address-details-side {
        text-align: center; /* Center text when stacked */
        margin-bottom: 40px;
        max-width: 500px;
      }
      .address-details-side h2 {
        font-size: 2.5em;
      }
      .address-text {
        padding-left: 0;
        border-left: none; /* Remove vertical line when centered */
      }
      .map-container {
          max-width: 100%;
          height: 280px; /* Shorter map on tablet */
      }
    }

    /* --- Media Query for MOBILE (≤600px) --- */
    @media (max-width: 600px) {
      .address-wrapper {
        padding: 40px 0;
      }
      .address-content-container h2 {
        font-size: 2em;
      }
      .address-text {
        padding-left: 0;
        border-left: none;
      }
      .map-container {
          height: 200px; /* Shorter map on mobile */
      }
    }
  `;

  return (
    <>
      <style>{responsiveCSS}</style>
      
      <section id="Address" className="address-wrapper">
        <div className="address-content-container">
          
          {/* LEFT SIDE: Address Details */}
          <div className="address-details-side">
            
            <h2>
              Branch
            </h2>
            
            <div className="address-text">
              <div className="office-title">
                <span className="address-line" style={{ fontWeight: 'bold', fontSize: '1.4em', color: THEME_COLOR }}>
                  {office.title}
                </span>
                <p className="address-line" style={{ marginTop: '10px', fontWeight: 'bold' }}>
                  {office.address[0]} {/* Company Name */}
                </p>
              </div>
              
              {/* Address Lines */}
              <div>
                {office.address.slice(1).map((line, index) => (
                  <p key={index} className="address-line">
                    {line}
                  </p>
                ))}
              </div>
            </div>
            
            {/* Map Link Button */}
            <a 
              href={office.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="map-button"
            >
              Get Directions
            </a>
          </div>

          {/* RIGHT SIDE: REAL EMBEDDED MAP */}
          <div className="address-map-side">
            <div className="map-container">
                <iframe 
                    src={office.mapEmbedUrl} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default AddressSection;