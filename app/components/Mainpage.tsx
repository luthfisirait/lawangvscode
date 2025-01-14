"use client";

import React from "react";
import "../styles/Mainpagecss.css";

const MainPage = ({ id }: { id?: string }) => {
  return (
    <section id={id}>
    <main className="main-page">
      <div className="main-content">
        <h1 className="main-title">Aceh Aquathic</h1>
        <p className="main-description">
          Jelajahi keindahan bawah laut Aceh yang memukau, penuh dengan keanekaragaman hayati dan pengalaman yang tak terlupakan.
        </p>
      </div>
    </main>
    </section>
  );
};

export default MainPage;