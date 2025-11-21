import React, { useState } from 'react';
import logo from '../assets/Logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Your established dark blue color
  const THEME_COLOR = '#022A70';
  const GOLD_COLOR = 'var(--color-gold, #FFD700)';

  // Reusable inline styles for consistency
  const navLinkStyle = {
    color: THEME_COLOR,
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s',
  };

  // Reusable hover effect for links
  const linkHover = {
    onMouseOver: (e) => (e.target.style.color = GOLD_COLOR),
    onMouseOut: (e) => (e.target.style.color = THEME_COLOR),
  };

  // Reusable Contact Button styles
  const contactButtonStyle = {
    backgroundColor: THEME_COLOR,
    color: 'white',
    textDecoration: 'none',
    padding: '10px 25px',
    borderRadius: '8px',
    border: `2px solid ${THEME_COLOR}`,
    transition: 'all 0.3s ease',
    fontWeight: '500',
    cursor: 'pointer'
  };

  const contactHover = {
    onMouseOver: (e) => {
      e.target.style.backgroundColor = 'white';
      e.target.style.color = THEME_COLOR;
    },
    onMouseOut: (e) => {
      e.target.style.backgroundColor = THEME_COLOR;
      e.target.style.color = 'white';
    }
  };

  // --- CSS with Media Queries for Responsiveness ---
  const responsiveCSS = `
    /* Base styles for the main navigation element */
    .header-nav {
      display: flex; 
      align-items: center;
      transition: all 0.3s ease-in-out;
    }

    /* Hamburger Menu Icon (Hidden by Default) */
    .menu-toggle-button {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 10px;
      font-size: 24px;
      color: ${THEME_COLOR};
    }

    /* --- Media Query for TABLET & MOBILE (Less than 1024px) --- */
    @media (max-width: 1024px) {
      .header-nav {
        /* On small screens, transition to a stacked, full-screen menu */
        flex-direction: column;
        position: absolute;
        top: 65px; /* Adjust based on header height */
        right: 0;
        width: 100%;
        background-color: white; /* Match header background */
        box-shadow: 0 10px 15px rgba(0,0,0,0.1);
        padding: 20px 0;
        /* Hide the menu by default */
        max-height: 0;
        overflow: hidden;
      }
      
      /* Styles for the open menu */
      .header-nav.open {
        max-height: 300px; /* Needs to be enough to fit content */
        overflow: visible;
      }
      
      /* Show the hamburger button */
      .menu-toggle-button {
        display: block;
      }

      /* Style the individual links for stacked layout */
      .header-nav a {
        padding: 15px 30px;
        margin: 5px 0;
        width: 100%;
        text-align: center;
      }
      
      /* Make the contact button stand out in the mobile menu */
      .header-nav .contact-button {
          margin-top: 20px;
      }
    }
  `;

  const handleLinkClick = (e, href) => {
      // Close menu on link click
      setIsMenuOpen(false);
      // Allow default anchor behavior (scrolling)
      window.location.href = href;
  };

  return (
    <>
      {/* Inject CSS with Media Queries */}
      <style>{responsiveCSS}</style> 

      <header style={{ 
          backgroundColor: 'white', 
          padding: '10px 30px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
      }}>
        
        {/* --- LOGO SECTION --- */}
        <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '15px' 
        }}>
          <img src={logo} alt="Mavigen Logo" style={{ height: '45px', width: 'auto' }} />
          <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center',
              lineHeight: '1.1',
              color: THEME_COLOR,
              fontFamily: 'sans-serif' 
          }}>
            <span style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '0.5px' }}>
               Glyogen
            </span>
            <span style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '0.5px' }}>
              Clinical Research
            </span>
          </div>
        </div>
        {/* --- END LOGO SECTION --- */}

        {/* --- HAMBURGER BUTTON (Mobile Only) --- */}
        <button 
            className="menu-toggle-button" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
        >
          {isMenuOpen ? '✕' : '☰'} 
        </button>
        {/* --- END HAMBURGER BUTTON --- */}


        {/* --- NAVIGATION LINKS (Desktop & Mobile Menu) --- */}
        <nav 
            id="main-navigation"
            className={`header-nav ${isMenuOpen ? 'open' : ''}`} 
            style={{ 
                // Only desktop layout styles are applied inline here
                '@media (min-width: 1025px)': { 
                    display: 'flex', // Ensure display flex on desktop
                    alignItems: 'center'
                }
            }}
        >
          {/* ABOUT US Link */}
          <a 
            href="#about" 
            style={{ ...navLinkStyle, margin: '0 15px' }} 
            {...linkHover}
            onClick={(e) => handleLinkClick(e, '#about')}
          >
            ABOUT US
          </a>
          
          {/* COMPANY Link (Directing to #compliance-section or #Address) */}
          <a 
            href="#Address" // Assuming you updated the target ID
            style={{ ...navLinkStyle, margin: '0 15px' }} 
            {...linkHover}
            onClick={(e) => handleLinkClick(e, '#compliance-section')}
          >
            COMPANY
          </a>
          
          {/* CONTACT Button */}
          <a
            href="#contact"
            className="contact-button"
            style={{
              ...contactButtonStyle,
              marginLeft: '15px', // Desktop margin
            }}
            {...contactHover}
            onClick={(e) => handleLinkClick(e, '#contact')}
          >
            Contact
          </a>
        </nav>
        {/* --- END NAVIGATION LINKS --- */}
      </header>
    </>
  );
};

export default Header;