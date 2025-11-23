import React from 'react';

const HeroSection = () => {
  const THEME_COLOR = '#022A70';
  const TEXT_COLOR = 'var(--color-white, white)';

  const heroHeadingStyle = {
    fontSize: 'clamp(2.0em, 4.5vw, 3.5em)',
    marginBottom: '20px',
    fontWeight: 'bold',
    lineHeight: '1.2',
    maxWidth: '90vw',
    boxSizing: 'border-box',
    padding: '0 10px',
  };

  const heroParagraphStyle = {
    fontSize: 'clamp(1.0em, 1.5vw, 1.2em)',
    maxWidth: '700px',
    marginBottom: '40px',
    lineHeight: '1.5',
    width: '90vw',
    boxSizing: 'border-box',
    margin: '0 auto 40px auto',
  };

  const heroSectionStyle = {
    backgroundImage: 'url(./lab-image-placeholder.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: TEXT_COLOR,
    padding: '80px 10px',
    backgroundColor: THEME_COLOR,
    overflowX: 'hidden',
    width: '100%',
    boxSizing: 'border-box',
    position: 'relative',
  };

  const contactButtonStyle = {
    color: TEXT_COLOR,
    textDecoration: 'none',
    padding: '12px 30px',
    borderRadius: '8px',
    backgroundColor: 'transparent',
    border: `2px solid ${TEXT_COLOR}`,
    fontWeight: '500',
    fontSize: '1.1em',
    transition: 'all 0.3s ease',
  };

  const buttonHoverEffect = {
    onMouseOver: (e) => {
      e.target.style.backgroundColor = TEXT_COLOR;
      e.target.style.color = THEME_COLOR;
    },
    onMouseOut: (e) => {
      e.target.style.backgroundColor = 'transparent';
      e.target.style.color = TEXT_COLOR;
    },
  };

  return (
    <>
      <style>
        {`
          /* ====================== RESPONSIVE MEDIA QUERIES ====================== */

          /* Laptop/Desktop (≥1024px) */
          @media (min-width: 1024px) {
            .hero {
              min-height: 90vh;
              padding: 100px 40px;
            }

            .hero h1 {
              font-size: 3.5em;
              max-width: 1000px; /* Constrain heading width */
            }

            .hero p {
              font-size: 1.2em;
              max-width: 800px; /* Constrain paragraph width */
            }

            .hero a {
              padding: 14px 36px;
              font-size: 1.1em;
            }
          }

          /* --- NEW: Laptop L (1440px and up) --- */
          @media (min-width: 1400px) {
            .hero {
              min-height: 95vh;
            }
            .hero h1 {
              font-size: 4.0em; /* Slightly larger heading */
              max-width: 3000px; /* Allow heading to stretch more */
            }

            .hero p {
              font-size: 1.3em; /* Slightly larger paragraph */
              max-width: 3000px; /* Allow paragraph to stretch more */
            }

            .hero a {
              padding: 16px 40px; /* Larger button */
              font-size: 1.2em;
            }
          }
          
          /* --- NEW: 4K / Extra-Large Screens (2560px and up) --- */
          @media (min-width: 2560px) {
            .hero {
              min-height: 95vh;
              padding: 150px 60px;
            }
            .hero h1 {
              font-size: 5.0em; /* Significantly larger heading */
              max-width: 4000px; /* Allow content to use more screen width */
            }
            .hero p {
              font-size: 1.6em; /* Significantly larger paragraph */
              max-width: 4000px;
            }
            .hero a {
              padding: 20px 50px; /* Much larger button */
              font-size: 1.4em;
            }
          }

          /* Tablet (769px – 1023px) */
          @media (max-width: 1024px) and (min-width: 769px) {
            .hero {
              min-height: 80vh;
              padding: 80px 30px;
            }

            .hero h1 {
              font-size: 2.8em;
              line-height: 1.3;
            }

            .hero p {
              font-size: 1.1em;
              max-width: 600px;
            }

            .hero a {
              padding: 12px 28px;
              font-size: 1.05em;
            }
          }

          /* Mobile (≤768px) */
          @media (max-width: 768px) {
            .hero {
              min-height: 70vh;
              padding: 60px 20px;
            }

            .hero h1 {
              font-size: 2.2em;
              line-height: 1.3;
              margin-bottom: 15px;
            }

            .hero p {
              font-size: 1em;
              max-width: 90%;
              margin-bottom: 30px;
            }

            .hero a {
              padding: 10px 24px;
              font-size: 1em;
            }
          }

          /* Small Mobile (≤480px) */
          @media (max-width: 480px) {
            .hero {
              min-height: 60vh;
              padding: 50px 15px;
            }

            .hero h1 {
              font-size: 1.8em;
            }

            .hero p {
              font-size: 0.95em;
            }

            .hero a {
              padding: 10px 22px;
              font-size: 0.95em;
            }
          }
        `}
      </style>

      <section className="hero" style={heroSectionStyle}>
        {/* Optional Dark Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: THEME_COLOR,
            opacity: 0.4,
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h1 style={heroHeadingStyle}>
            Advancing in life science and research<br />for better outcomes
          </h1>
          <p style={heroParagraphStyle}>
            Committed to Life science development, Safety and Efficacy in Clinical trials
          </p>
          <a
            href="#contact"
            className="btn-primary"
            style={contactButtonStyle}
            {...buttonHoverEffect}
          >
            Contact
          </a>
        </div>
      </section>
    </>
  );
};

export default HeroSection;