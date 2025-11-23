import React from 'react';

const Footer = () => {
  const email = "info@glyogen.com";
  const contacts = [
    { name: 'R.Vinoth Kumar', number: '+91 88830 38883' },
    { name: 'S.GURUNATHAN', number: '+91 9629679286' },
    { name: 'V.A.MANIAN', number: '+91 9629679286' },
    { name: 'V.VIKRAM', number: '+91 9629679286' },
  ];
  const branchOffice = "No :20 Maruthupandiyar 1st street, Narimedu, Madurai -625002";
  const currentYear = new Date().getFullYear();

  // Define styles based on the original component's variables
  const GOLD_COLOR = 'var(--color-gold, #FFD700)'; // Accent color for headings
  const WHITE_COLOR = 'var(--color-white, #FFFFFF)'; // Text color

  // Reusable inline styles (non-layout, consistent across views)
  const headingStyle = {
    color: GOLD_COLOR,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginBottom: '20px',
    fontSize: '1rem', // Base size for desktop headings
    letterSpacing: '1px'
  };

  const linkStyle = {
    color: WHITE_COLOR,
    textDecoration: 'none',
    display: 'block',
    marginBottom: '10px',
    fontSize: '0.95rem', // Base size for desktop links/text
    transition: 'color 0.3s',
  };

  const hoverEffect = {
    onMouseOver: (e) => (e.currentTarget.style.color = GOLD_COLOR),
    onMouseOut: (e) => (e.currentTarget.style.color = WHITE_COLOR),
  };
  
  // Style for the social icon container
  const socialIconContainerStyle = {
    cursor: 'pointer',
    width: '35px', 
    height: '35px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: '5px',
  };
  
  // Style for the social image itself
  const socialImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    borderRadius: '5px'
  }
  
  // --- CSS with Media Queries for Responsiveness (UPDATED) ---
  const responsiveCSS = `
    .footer-base {
      background-color: #022A70; 
      color: ${WHITE_COLOR}; 
      padding: 60px 40px; /* Default for desktop/laptop */
      font-family: sans-serif;
    }

    .footer-grid-container {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      gap: 30px;
      padding-bottom: 40px;
      
      /* Default: Desktop/Laptop (4 columns - the original logic) */
      grid-template-columns: repeat(4, 1fr); 
    }
    
    .footer-grid-container h4 {
        font-size: 1rem; /* Base font size for h4/headings */
    }
    .footer-grid-container a, 
    .footer-grid-container p {
        font-size: 0.95rem; /* Base font size for links/text */
    }

    .footer-copyright {
      margin-top: 40px; 
      padding-top: 20px; 
      text-align: center; 
      border-top: 1px solid rgba(255,255,255,0.1); 
      font-size: 0.85rem; /* Base font size for copyright */
    }

    /* =================================================== */
    /* NEW: Laptop L (1440px and up) */
    /* =================================================== */
    @media (min-width: 1400px) {
        .footer-base {
            padding: 80px 60px; /* Increased vertical and horizontal padding */
        }
        .footer-grid-container {
            max-width: 2000px; /* Increased max width for the content */
            gap: 40px;
        }
        .footer-grid-container h4 {
            font-size: 1.1rem; /* Slightly larger headings */
        }
        .footer-grid-container a, 
        .footer-grid-container p {
            font-size: 1.0rem; /* Slightly larger links/text */
        }
        .footer-copyright {
            font-size: 0.9rem; /* Slightly larger copyright text */
        }
    }

    /* =================================================== */
    /* NEW: 4K/Extra-Large Screens (2560px and up) */
    /* =================================================== */
    @media (min-width: 2560px) {
        .footer-base {
            padding: 120px 80px; /* Much more vertical space */
        }
        .footer-grid-container {
            max-width: 1800px; /* Set a large max width for 4K displays */
            gap: 60px;
        }
        .footer-grid-container h4 {
            font-size: 1.4rem; /* Scale headings significantly */
        }
        .footer-grid-container a, 
        .footer-grid-container p {
            font-size: 1.2rem; /* Scale links/text significantly */
        }
        .footer-copyright {
            font-size: 1.0rem; /* Larger copyright text */
        }
    }

    /* --- Media Query for TABLET (e.g., 768px to 1024px) --- */
    @media (max-width: 1024px) {
      .footer-grid-container {
        /* Tablet: 2 columns */
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    /* --- Media Query for MOBILE (e.g., less than 768px) --- */
    @media (max-width: 767px) {
      .footer-base {
        padding: 40px 20px; /* Reduced padding for mobile */
      }
      .footer-grid-container {
        /* Mobile: 1 column */
        grid-template-columns: 1fr;
        gap: 50px; /* More vertical space between sections */
      }
    }
  `;

  // NOTE: Headings and links must now be updated to use the CSS font size
  // and remove the hardcoded inline font size if the logic is to be managed 
  // fully by the new media queries. I'll make a minor adjustment to remove 
  // font-size from the inline styles to allow the new CSS to take effect.
  
  const updatedHeadingStyle = {
    ...headingStyle,
    fontSize: 'unset', // Allow CSS to control this
  };

  const updatedLinkStyle = {
    ...linkStyle,
    fontSize: 'unset', // Allow CSS to control this
  };


  return (
    <>
      {/* 
        This is necessary to include media queries in a single file. 
        In a production application, these styles should be in a separate CSS file.
      */}
      <style>{responsiveCSS}</style> 
      
      <footer className="footer-base">
        <div 
          className="footer-grid-container"
          // All layout styles are now in the CSS string above.
        >
          {/* === COLUMN 1: KEY CONTACTS === */}
          <div>
            <h4 style={updatedHeadingStyle}>Key Contacts</h4>
            {contacts.map((contact, index) => (
              <a 
                key={index}
                href={`tel:${contact.number.replace(/\s/g, '')}`} 
                style={updatedLinkStyle}
                {...hoverEffect}
              >
                {contact.name}
                <br/>
                <span style={{ fontSize: '0.85rem' }}>{contact.number}</span>
              </a>
            ))}
          </div>

          {/* === COLUMN 2: EMAIL & LINKS === */}
          <div>
            <h4 style={updatedHeadingStyle}>Email Us</h4>
            <a 
              href={`mailto:${email}`} 
              style={updatedLinkStyle}
              {...hoverEffect}
            >
              {email}
            </a>
            
            <h4 style={{ ...updatedHeadingStyle, marginTop: '20px' }}>Company</h4>
            {/* Placeholder Nav Links */}
            <a href="#about" style={updatedLinkStyle} {...hoverEffect}>About Us</a>
            <a href="#Address" style={updatedLinkStyle} {...hoverEffect}>Company Profile</a>
            <a href="#contact" style={updatedLinkStyle} {...hoverEffect}>Contact Details</a>
          </div>

          {/* === COLUMN 3: OFFICES === */}
          <div>
            

            <h4 style={{ ...updatedHeadingStyle, marginTop: '20px' }}>Branch</h4>
            <p style={{ ...updatedLinkStyle, cursor: 'default', whiteSpace: 'pre-line', lineHeight: '1.4' }}>
              {branchOffice}
            </p>
          </div>

          {/* === COLUMN 4: FOLLOW US === */}
          <div style={{ minWidth: '200px' }}>
            <h4 style={updatedHeadingStyle}>Get In Touch</h4>
            <p style={{ ...updatedLinkStyle, cursor: 'default', lineHeight: '1.4', marginBottom: '20px' }}>
              Get in touch to learn more about our clinical research services and
             how we can assist you in oncology drug evaluation.
            </p>
{/*             
            <h4 style={{ ...headingStyle, marginTop: '30px' }}>Follow us</h4>
            <div style={{ display: 'flex', gap: '10px' }}>
              
             <a href="https://www.facebook.com/share/p/19gzw2xAB7/"> <div style={socialIconContainerStyle}>
                <img src='/src/assets/facebook.png' alt="Facebook" style={socialImageStyle} />
              </div></a>
              <a href="mailto:contact@mavigenlifescience.com">
              <div style={socialIconContainerStyle}>
                <img src='/src/assets/gmail.png' alt="Mail" style={socialImageStyle} />
              </div>
              </a>
              <a href="https://www.instagram.com/_mavigen_?igsh=MTFjZWZuaWEydHo5eA==">
              <div style={socialIconContainerStyle}>
                <img src='/src/assets/instagram.png' alt="Instagram" style={socialImageStyle} />
              </div>
              </a>
            </div> */}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-copyright">
          <p style={{ margin: 0 }}>
            &copy; {currentYear} Glyogen Clinical Research. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;