import React from 'react';

const MissionVisionSection = () => {
  // Define CSS variables for use in the template literal (optional, but good practice)
  const TEAL_COLOR = '#022A70'; // Background color
  const GOLD_COLOR = 'var(--color-gold, #FFD700)'; // Accent color
  const WHITE_COLOR = 'var(--color-white, white)'; // Text color

  return (
    <>
      <style>
        {`
          /* Outer Section Container: Spans full width and sets background */
          .mv-wrapper {
            background-color: ${WHITE_COLOR}; /* This now fills the entire screen width */
            padding: 60px 0; /* Vertical padding applied here */
            box-sizing: border-box;
          }

          /* Inner Content Container: Constrains width and centers content */
          .mv-section {
            max-width: 1200px; /* Constrain max width for desktop content */
            margin: 0 auto; /* Center the content */
            display: flex;
            gap: 40px;
            justify-content: center;
            align-items: stretch;
            flex-wrap: wrap; 
            padding: 0 40px; /* Horizontal padding for desktop content/gap from screen edge */
            box-sizing: border-box; 
          }

          .mv-box {
            /* flex-grow: 1, flex-shrink: 1, flex-basis: 400px */
            flex: 1 1 400px; 
            padding: 40px;
            background-color: ${TEAL_COLOR};
            color: white;
            border-radius: 16px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-sizing: border-box;
          }

          .mv-box:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.25);
          }

          .mv-box h2 {
            border-bottom: 3px solid ${GOLD_COLOR};
            padding-bottom: 10px;
            margin-bottom: 20px;
            font-size: 2rem;
          }
          
          .mv-box p {
            font-size: 1rem;
          }
          
          /* =================================================== */
          /* NEW: Laptop L (1440px and up) */
          /* =================================================== */
          @media (min-width: 1400px) {
            .mv-wrapper {
                padding: 90px 0; /* More vertical space */
            }
            .mv-section {
                max-width: 1800px; /* Set a large max width for the content */
                gap: 60px;
                padding: 0 80px;
            }
            .mv-box {
                padding: 60px;
                flex-basis: 550px; /* Allow boxes to be much wider */
            }
            .mv-box h2 {
                font-size: 2.8rem; /* Scale heading size */
            }
            .mv-box p {
                font-size: 1.4rem; /* Scale paragraph size */
            }
          }

          /* =================================================== */
          /* NEW: 4K/Extra-Large Screens (2560px and up) */
          /* =================================================== */
          @media (min-width: 2560px) {
            .mv-wrapper {
                padding: 90px 0; /* More vertical space */
            }
            .mv-section {
                max-width: 1800px; /* Set a large max width for the content */
                gap: 60px;
                padding: 0 80px;
            }
            .mv-box {
                padding: 60px;
                flex-basis: 550px; /* Allow boxes to be much wider */
            }
            .mv-box h2 {
                font-size: 2.8rem; /* Scale heading size */
            }
            .mv-box p {
                font-size: 1.4rem; /* Scale paragraph size */
            }
          }

          /* Laptop/Desktop (≥1024px) */
          @media (min-width: 1024px) {
            /* NOTE: Styles here are now the default for 1024px until 1440px, 
                     and are overridden by the new queries above. */
          }

          /* Tablet (≤1024px) */
          @media (max-width: 1024px) {
            .mv-wrapper {
              padding: 50px 0; /* Adjust wrapper padding */
            }
            .mv-section {
              gap: 30px;
              max-width: 900px;
              padding: 0 30px; /* Adjusted horizontal padding */
            }

            .mv-box {
              flex: 1 1 300px; 
              padding: 35px;
            }

            .mv-box h2 {
              font-size: 1.8rem;
            }
          }

          /* Mobile (≤768px) - Stacked Layout */
          @media (max-width: 768px) {
            .mv-wrapper {
              padding: 40px 0;
            }
            .mv-section {
              flex-direction: column; /* Stack columns */
              align-items: center;
              padding: 0 20px; /* Adjusted horizontal padding */
              gap: 25px;
            }

            .mv-box {
              width: 100%; 
              max-width: 450px; 
              padding: 30px;
              flex-basis: auto;
            }

            .mv-box h2 {
              font-size: 1.5rem;
              text-align: center;
            }

            .mv-box p {
              font-size: 0.95rem;
              text-align: center;
            }
          }

          /* VERY SMALL MOBILE (≤400px) - Specifically for 320px screens and below */
          @media (max-width: 400px) {
            .mv-wrapper {
              padding: 30px 0;
            }
            .mv-section {
              padding: 0 10px; /* Reduced horizontal padding for very small screens */
            }

            .mv-box {
              padding: 20px; 
            }

            .mv-box h2 {
              font-size: 1.2rem;
            }
            
            .mv-box p {
              font-size: 0.85rem;
            }
          }
        `}
      </style>

      {/* NEW WRAPPER - This handles the full-width background color */}
      <div className="mv-wrapper"> 
        <section className="mv-section">
          {/* Mission Box */}
          <div className="mv-box">
            <h2>Our Mission</h2>
            <p>
              To be a global leader in clinical research for oncology, driving breakthroughs in
              cancer treatment that improve patient outcomes and contribute to a healthier future
              for all.
            </p>
          </div>

          {/* Vision Box */}
          <div className="mv-box">
            <h2>Our Vision</h2>
            <p>
              To advance the development of safe and effective oncology drugs through rigorous
              clinical research, ensuring the highest standards of safety and compliance. We aim
              to collaborate closely with global regulatory bodies like the FDA, MHRA, and CDSCO
              to bring innovative treatments to patients worldwide.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default MissionVisionSection;