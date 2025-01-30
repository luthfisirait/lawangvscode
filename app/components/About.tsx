"use client";

import React from "react";
import '../styles/Aboutcss.css';
import Head from 'next/head';

const About = ({ id }: { id?: string }) => {
    return (
      <>
      <Head>
        <title>About Aquathic Aceh - Coral Reef Conservation</title>
        <meta name="description" content="Learn about Aquathic Aceh, a group of passionate young individuals actively engaged in coral reef conservation in Aceh. Discover our vision and achievements." />
        <meta name="keywords" content="Aquathic Aceh, coral reef conservation, marine life, youth community, sustainable conservation" />
        <meta name="author" content="Aquathic Aceh" />
        <meta property="og:title" content="About Aquathic Aceh - Coral Reef Conservation" />
        <meta property="og:description" content="Learn about Aquathic Aceh, a group of passionate young individuals actively engaged in coral reef conservation in Aceh. Discover our vision and achievements." />
        <meta property="og:image" content="/assets/terumbu-karang.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Aquathic Aceh - Coral Reef Conservation" />
        <meta name="twitter:description" content="Learn about Aquathic Aceh, a group of passionate young individuals actively engaged in coral reef conservation in Aceh. Discover our vision and achievements." />
        <meta name="twitter:image" content="/assets/terumbu-karang.jpg" />
      </Head>
      <section id={id}>
        <div className="about-page">
          {/* Bagian Konten About */}
          <div className="about-container">
            <div className="about-content">
              <h1 className="about-title">About Aquathic Aceh</h1>
              <p className="about-description">
              Aceh Aquatic Youth is a group of 37 passionate young individuals actively engaged in coral reef conservation in Aceh. We believe that through hard work, education, and strong collaboration, we can protect and preserve coral reefs, which are home to many valuable marine species.
              </p>
              <h2 className="about-title">
              Vision
              </h2>
              <p className="about-description">
              To become a pioneering youth community for sustainable conservation in Aceh, based on collaboration, education, and innovation to preserve marine and coastal ecosystems as a valuable heritage for future generations..
              </p>
            </div>
    
            {/* Gambar Diving */}
            <div className="about-image">
              <img
                src='./assets/terumbu-karang.jpg'
                alt="Coral reef conservation by Aquathic Aceh"
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
        </>
      );
    };
  
  export default About;