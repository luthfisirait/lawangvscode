"use client";

import React from "react";
import '../styles/Aboutcss.css';

const About = ({ id }: { id?: string }) => {
    return (
      <section id={id}>
        <div className="about-page">
          {/* Bagian Konten About */}
          <div className="about-container">
            <div className="about-content">
              <h1 className="about-title">About Aquathic Aceh</h1>
              <p className="about-description">
                Aceh Aquatic Youth is a community dedicated to preserving the marine
                environment, with a particular focus on coral reef conservation. We
                believe that the beauty of Aceh's underwater world is a legacy that
                must be protected for future generations. Through coral rehabilitation
                and transplantation programs, we strive to support a healthy and
                sustainable marine ecosystem.
              </p>
            </div>
    
            {/* Gambar Diving */}
            <div className="about-image">
              <img
                src="https://example.com/path-to-your-diving-image.jpg"
                alt="Diving"
                className="image"
              />
            </div>
          </div>
    
          {/* Bagian Pencapaian */}
          <div className="achievements">
            <div className="achievement-item">
              <h3 className="achievement-title">Coral Reefs Restored</h3>
              <p className="achievement-value">23 km<sup>2</sup></p>
            </div>
            <div className="achievement-item">
              <h3 className="achievement-title">Coral Transplanted</h3>
              <p className="achievement-value">10 Types</p>
            </div>
            <div className="achievement-item">
              <h3 className="achievement-title">Swimming Learners</h3>
              <p className="achievement-value">13 Active</p>
            </div>
          </div>
        </div>
        </section>
      );
    };
  
  export default About;