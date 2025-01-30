import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Documentationcss.css'; // Ensure this path is correct

const Documentation = () => {
  return (
    <section id="documentation" className="documentation-page">
      <h1 className="documentation-title">Documentation</h1>
      <p className="documentation-description">
        Explore the visual documentation of our efforts to preserve Aceh’s coral reefs and marine life through inspiring photos and videos.
      </p>
      <div className="documentation-content">
        <div className="example-photos">
          <img src="./assets/document.jpg" alt="Example Photo 1" className="example-photo" />
        </div>
        <div className="social-media-links">
          <p className="social-media-description">More explore my documentation, visit our Instagram and TikTok:</p>
          <a href="https://www.instagram.com/acehakuatik" target="_blank" rel="noopener noreferrer" className="social-media-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer" className="social-media-icon">
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Documentation;