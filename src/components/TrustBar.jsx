import React, { useState, useEffect } from 'react';

const TrustBar = () => {
  // -------------------------
  // Responsive Logic (Simulated Media Queries)
  // -------------------------
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // -------------------------

  const THEME_COLOR = '#0A2342';
  const WHITE_COLOR = 'var(--color-white, white)';

  // Styles for the outer section - always full width
  const outerSectionStyle = {
    backgroundColor: WHITE_COLOR,
    padding: isMobile ? '40px 0' : '80px 0', // Vertical padding, no horizontal here
    overflowX: 'hidden', // Crucial to prevent horizontal scrolling
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'Arial, sans-serif', // Ensure consistent font
  };

  // Styles for the inner content container - handles max-width and centering
  const innerContentContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1200px', // Content will not exceed this width
    margin: '0 auto', // Centers the content container
    // Flexible padding for the inner content, ensures content doesn't touch screen edges
    padding: isMobile ? '0 15px' : '0 40px', 
    flexWrap: 'wrap', // Allows content blocks to wrap on smaller screens
    boxSizing: 'border-box', // Include padding in the element's total width
  };

  const titleContainerStyle = { 
    flex: isMobile ? '1 1 100%' : '1 1 40%', 
    textAlign: isMobile ? 'center' : 'left',
    marginBottom: isMobile ? '20px' : '0', 
  };

  const titleTextStyle = {
    fontSize: isMobile ? 'clamp(2.5em, 8vw, 64px)' : '64px', // Fluid font size
    fontWeight: '700',
    color: THEME_COLOR,
    margin: '0',
  };

  const descriptionContainerStyle = { 
    flex: isMobile ? '1 1 100%' : '1 1 55%', 
    color: THEME_COLOR, 
    lineHeight: '1.8',
    textAlign: isMobile ? 'center' : 'left',
  };

  const descriptionTextStyle = { 
    fontSize: '18px', 
    margin: '0' 
  };


  return (
    <section
      id="about"
      style={outerSectionStyle}
    >
      <div style={innerContentContainerStyle}>
        {/* Left Side: Title */}
        <div style={titleContainerStyle}>
          <h1 style={titleTextStyle}>
            About Us
          </h1>
        </div>

        {/* Right Side: Description */}
        <div style={descriptionContainerStyle}>
          <p style={descriptionTextStyle}>
            <strong>Glyogen Clinical Research</strong> is a Site Management Organization specializing
            in the assessment of oncology drug safety and efficacy. Leveraging deep therapeutic
            insight, innovative end-to-end trial solutions, and global reach, we meticulously
            build each study brick by brick for meaningful clinical outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;