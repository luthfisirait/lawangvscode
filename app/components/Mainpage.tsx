"use client";

import React from "react";
import "../styles/Mainpagecss.css";

const MainPage = ({ id }: { id?: string }) => {
  return (
    <section id={id}>
    <main className="main-page">
      <div className="main-content">
        <h1 className="main-title">Aceh Aquatic</h1>
        <p className="main-description">
        Explore the mesmerizing underwater beauty of Aceh, teeming with biodiversity and unforgettable experiences.
        </p>
      </div>
    </main>
    </section>
  );
};

export default MainPage;