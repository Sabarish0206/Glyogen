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
  
  // --- CSS with Media Queries for Responsiveness ---
  const responsiveCSS = `
    .contact-section-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 60px ${PADDING_SECTION_DESKTOP}; /* Default for desktop/laptop */
      background-color: ${WHITE_COLOR};
      max-width: 1200px; /* Constrain max width for desktop */
      margin: 0 auto; /* Center the container */
    }

    .contact-details {
      flex: 1;
      padding-right: 40px; /* Default gap between text and image */
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

    /* --- Media Query for TABLET & Smaller Screens (e.g., max-width: 1024px) --- */
    @media (max-width: 1024px) {
      .contact-section-container {
        /* Switch to column layout (stacked) */
        flex-direction: column; 
        padding: 40px 40px;
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

  return (
    <>
      {/* Inject CSS with Media Queries */}
      <style>{responsiveCSS}</style> 
      
      <section id="contact" className="contact-section-container">
        
        {/* Left Side — Contact Details */}
        <div className="contact-details">
          <h2 style={headingStyle}>
            Contact Us
          </h2>

          <p style={{ marginBottom: '20px', color: '#333', lineHeight: 1.6 }}>
            Get in touch to learn more 
            about our clinical research services and how we can assist you in oncology drug evaluation.
          </p>

          <div style={{ marginBottom: '20px', fontSize: '18px' }}>
            📞 <strong>R.Vinoth Kumar</strong>+91 88830 38883
            <br/>
            📞 <strong>S.GURUNATHAN</strong> +91 9629679286
            <br/>
            📞 <strong>V.A.MANIAN</strong> +91 8248655105
            <br/>
            📞 <strong>V.VIKRAM</strong> +91 8248624130
          </div>

          <div style={{ marginBottom: '20px', fontSize: '18px' }}>
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