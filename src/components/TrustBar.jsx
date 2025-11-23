import React, { useState, useEffect } from 'react';

const TrustBar = () => {
  // -------------------------
  // Responsive Logic (Simulated Media Queries)
  // -------------------------
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  // NEW: State for large screens
  const [isLaptopL, setIsLaptopL] = useState(window.innerWidth >= 1400);
  const [is4K, setIs4K] = useState(window.innerWidth >= 2560);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsLaptopL(width >= 1400);
      setIs4K(width >= 2560);
    };

    window.addEventListener('resize', handleResize);
    // Initial call to set correct state
    handleResize(); 
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // -------------------------

  const THEME_COLOR = '#0A2342';
  const WHITE_COLOR = 'var(--color-white, white)';
  
  // Dynamic values based on screen size
  const contentMaxWidth = is4K ? '5200px' : isLaptopL ? '3400px' : '1400px';
  const verticalPadding = is4K ? '120px 0' : isLaptopL ? '100px 0' : isMobile ? '40px 0' : '80px 0';
  const horizontalPadding = is4K ? '0 80px' : isLaptopL ? '0 60px' : isMobile ? '0 15px' : '0 40px';
  const titleSize = is4K ? '80px' : isLaptopL ? '72px' : isMobile ? 'clamp(2.5em, 8vw, 64px)' : '64px';
  const descriptionSize = is4K ? '24px' : isLaptopL ? '20px' : '18px';

  // Styles for the outer section - always full width
  const outerSectionStyle = {
    backgroundColor: WHITE_COLOR,
    padding: verticalPadding, // Use dynamic vertical padding
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
    maxWidth: contentMaxWidth, // Use dynamic max-width
    margin: '0 auto', // Centers the content container
    // Flexible padding for the inner content, ensures content doesn't touch screen edges
    padding: horizontalPadding, // Use dynamic horizontal padding
    flexWrap: 'wrap', // Allows content blocks to wrap on smaller screens
    boxSizing: 'border-box', // Include padding in the element's total width
  };

  const titleContainerStyle = { 
    flex: isMobile ? '1 1 100%' : '1 1 40%', 
    textAlign: isMobile ? 'center' : 'left',
    marginBottom: isMobile ? '20px' : '0', 
  };

  const titleTextStyle = {
    fontSize: titleSize, // Use dynamic title size
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
    fontSize: descriptionSize, // Use dynamic description size
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