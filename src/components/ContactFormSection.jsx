import React, { useState } from 'react';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', organization: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to an API endpoint here.
    alert('Thank you for your inquiry! We will be in touch soon.'); 
    console.log('Form Submitted:', formData);
    setFormData({ name: '', email: '', organization: '', message: '' }); // Clear form
  };
  
  // --- Define CSS variables and reusable styles (non-layout) ---
  const TEAL_COLOR = 'var(--color-teal, #008080)'; // Placeholder for teal color
  const PADDING_SECTION_DESKTOP = '80px'; // Placeholder for desktop padding
  const WHITE_COLOR = 'var(--color-white, #FFFFFF)';

  const contactLinkStyle = { 
    color: TEAL_COLOR, 
    textDecoration: 'none' 
  };

  const headingStyle = { 
    fontSize: '36px', 
    marginBottom: '20px', 
    color: '#333333' 
  };
  
  // --- CSS with Media Queries for Responsiveness (UPDATED) ---
  const responsiveCSS = `
    .contact-section-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 60px ${PADDING_SECTION_DESKTOP}; /* Default for desktop/laptop */
      background-color: ${WHITE_COLOR};
      max-width: 1200px; /* Constrain max width for desktop */
      margin: 0 auto; /* Center the container */
      box-sizing: border-box; /* Ensure padding is included in width */
    }

    .contact-details {
      flex: 1;
      padding-right: 40px; /* Default gap between text and image */
    }
    
    .contact-details h2 {
        font-size: 36px; /* Default heading size */
    }
    
    .contact-details p, .contact-details div {
        font-size: 18px; /* Default text size */
    }

    .contact-image-container {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 350px; /* Ensure image section has space */
    }
    
    .image-wrapper {
      background-color: #007b83;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }
    
    .contact-image {
      width: 350px; /* Default image size */
      height: auto;
      border-radius: 8px;
      object-fit: cover;
    }
    
    /* =================================================== */
    /* NEW: Laptop L (1440px and up) */
    /* =================================================== */
    @media (min-width: 1400px) {
        .contact-section-container {
            max-width:100%; /* Increased max width */
            padding: 80px 100px; /* Increased padding */
        }
        .contact-details {
            padding-right: 60px; /* Increased gap */
        }
        .contact-details h2 {
            font-size: 44px; /* Slightly larger heading */
        }
        .contact-details p, .contact-details div {
            font-size: 20px; /* Slightly larger text */
        }
        .contact-image {
            width: 400px; /* Slightly larger image */
        }
    }

    /* =================================================== */
    /* NEW: 4K/Extra-Large Screens (2560px and up) */
    /* =================================================== */
    @media (min-width: 2560px) {
        .contact-section-container {
            max-width: 100%; /* Set a large max width for 4K displays */
            padding: 120px 150px; /* Much more padding */
        }
        .contact-details {
            padding-right: 100px; /* Significant gap */
        }
        .contact-details h2 {
            font-size: 60px; /* Scale heading significantly */
        }
        .contact-details p, .contact-details div {
            font-size: 28px; /* Scale text significantly */
        }
        .contact-image {
            width: 550px; /* Much larger image */
        }
        .image-wrapper {
            padding: 30px; /* Larger padding around image */
        }
    }
    @media (min-width: 1200px) {
        .contact-section-container {
            max-width: 100%; /* Increased max width to fill space */
            padding: 60px 80px; /* Adjusted padding to maintain margin */
        }
        /* Optionally slightly increase text/image size here if needed */
        .contact-details h2 {
            font-size: 38px;
        }
    }
    
    /* --- Media Query for TABLET & Smaller Screens (e.g., max-width: 1024px) --- */
    @media (max-width: 1024px) {
      .contact-section-container {
        /* Switch to column layout (stacked) */
        flex-direction: column; 
        padding: 40px 40px;
        max-width:2000px;
      }
      
      .contact-details {
        flex: auto;
        padding-right: 0;
        margin-bottom: 40px; /* Space between details and image */
        text-align: center;
      }
      
      .contact-details h2 {
         font-size: 30px;
      }

      .contact-image-container {
        flex: auto;
        min-width: unset;
      }
      
      .contact-image {
        width: 100%; /* Image takes full width of its container (max 400px) */
        max-width: 400px; 
      }
    }
    
    /* --- Media Query for MOBILE (e.g., max-width: 600px) --- */
    @media (max-width: 600px) {
      .contact-section-container {
        padding: 30px 20px; /* Minimum padding for small screens */
      }
      
      .contact-details {
        margin-bottom: 30px;
        font-size: 16px;
      }

      .contact-details h2 {
         font-size: 26px;
      }
      
      .image-wrapper {
        padding: 15px; /* Smaller padding around image */
      }
    }
  `;

  // Adjust inline styles to allow CSS to control the font-size (as it's managed 
  // by the media queries now).
  const updatedHeadingStyle = { 
    ...headingStyle, 
    fontSize: 'unset' // Let CSS manage
  };
  
  const updatedDetailsStyle = { 
    marginBottom: '20px', 
    fontSize: 'unset' // Let CSS manage
  };


  return (
    <>
      {/* Inject CSS with Media Queries */}
      <style>{responsiveCSS}</style> 
      
      <section id="contact" className="contact-section-container">
        
        {/* Left Side — Contact Details */}
        <div className="contact-details">
          <h2 style={updatedHeadingStyle}>
            Contact Us
          </h2>

          <p style={{ ...updatedDetailsStyle, color: '#333', lineHeight: 1.6 }}>
            Get in touch to learn more 
            about our clinical research services and how we can assist you in oncology drug evaluation.
          </p>

          <div style={updatedDetailsStyle}>
            📞 <strong>R.Vinoth Kumar</strong>+91 88830 38883
            <br/>
            📞 <strong>S.GURUNATHAN</strong> +91 9629679286
            <br/>
            📞 <strong>V.A.MANIAN</strong> +91 8248655105
            <br/>
            📞 <strong>V.VIKRAM</strong> +91 8248624130
          </div>

          <div style={updatedDetailsStyle}>
            ✉️{' '}
            <a
              href="mailto:info@glyogen.com "
              style={contactLinkStyle}
            >
              info@glyogen.com
            </a>
          </div>
        </div>

        {/* Right Side — Image */}
        <div className="contact-image-container">
          <div className="image-wrapper">
            <img
              src="/src/assets/contact-image.png" 
              alt="Contact Mavigen"
              className="contact-image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

// Keeping this style defined outside, though it's not used in the final JSX provided.
const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box'
};

export default ContactFormSection;