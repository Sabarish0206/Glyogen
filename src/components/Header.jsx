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

  // --- CSS with Media Queries for Responsiveness (UPDATED) ---
  const responsiveCSS = `
    /* Base styles for the main navigation element */
    .header-nav {
      display: flex; 
      align-items: center;
      transition: all 0.3s ease-in-out;
    }

    /* A wrapper to apply max-width and centering to the header content on large screens */
    .header-content-wrapper {
        width: 100%;
        max-width: 1200px; /* Default Max-Width for standard desktops */
        margin: 0 auto; /* Center the content */
        display: flex;
        justify-content: space-between;
        align-items: center;
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
      
      /* Reset header content wrapper on mobile */
      .header-content-wrapper {
          max-width: 100%;
      }
    }
    
    /* =================================================== */
    /* NEW: Laptop L (1440px and up) */
    /* =================================================== */
    @media (min-width: 1400px) {
        /* Increase the maximum width of the header content */
        .header-content-wrapper {
            max-width: 80%; 
            padding: 0 40px; /* Add more horizontal padding for spacing */
        }
        
        /* Optional: Slightly increase font size for better legibility on larger displays */
        .header-nav a {
            font-size: 1.05rem; 
            margin: 0 10px !important; /* Increase horizontal margin */
        }
         .logo-text-wrapper span {
            font-size: 22px !important; /* Slightly larger logo text */
        }
    }

    /* =================================================== */
    /* NEW: 4K/Extra-Large Screens (2560px and up) */
    /* =================================================== */
    @media (min-width: 2560px) {
        /* Set a definitive large max-width for 4K displays */
        .header-content-wrapper {
            max-width: 2410px; /* Adjust this value to your preferred max width */
            padding: 0 60px;
        }
        
        /* Upscale logo size and/or text size on 4K monitors */
        .logo-text-wrapper {
            /* This is a new class for the logo and text container */
            transform: scale(1.15); /* Increase size of logo/text block by 15% */
            transform-origin: left center;
        }
        
        .header-nav a {
            font-size: 1.15rem; /* Increase link size */
        }
        
        .header-nav .contact-button {
            padding: 12px 30px; /* Make button slightly larger */
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
          padding: '10px 30px', // Removed flex properties to manage them in the wrapper
          // The following styles are retained
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
      }}>
        
        {/* --- WRAPPER FOR MAX-WIDTH AND CENTERING --- */}
        <div className="header-content-wrapper">

            {/* --- LOGO SECTION --- */}
            <div 
                className="logo-text-wrapper"
                style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '15px' 
                }}
            >
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
        </div> 
        {/* --- END WRAPPER --- */}
      </header>
    </>
  );
};

export default Header;