"use client";

import React from "react";
import '../styles/Teamcss.css'

const Team = ({ id }: { id?: string }) => {
  return (
    <section id={id}>
    <div className="team-page">
      {/* Bagian Title dan Deskripsi */}
      <div className="team-intro">
        <h1 className="team-title">Our Team</h1>
        <p className="team-description">
          A team committed to preserving coral reefs and developing water sports,
          providing a positive impact on the environment and community.
        </p>
      </div>

      {/* Daftar Anggota Tim */}
      <div className="team-members">
        {/* Anggota 1 */}
        <div className="team-member">
          <img
            src="https://example.com/path-to-member1-image.jpg"
            alt="Team Member 1"
            className="team-member-img"
          />
          <h3 className="team-member-name">Tinggal Aceh 1</h3>
          <p className="team-member-role">Coral Reef Specialist</p>
        </div>

        {/* Anggota 2 */}
        <div className="team-member">
          <img
            src="https://example.com/path-to-member2-image.jpg"
            alt="Team Member 2"
            className="team-member-img"
          />
          <h3 className="team-member-name">Tinggal Aceh 2</h3>
          <p className="team-member-role">Water Sports Instructor</p>
        </div>

        {/* Anggota 3 */}
        <div className="team-member">
          <img
            src="https://example.com/path-to-member3-image.jpg"
            alt="Team Member 3"
            className="team-member-img"
          />
          <h3 className="team-member-name">Tinggal Aceh 3</h3>
          <p className="team-member-role">Marine Biologist</p>
        </div>

        {/* Anggota 4 */}
        <div className="team-member">
          <img
            src="https://example.com/path-to-member4-image.jpg"
            alt="Team Member 4"
            className="team-member-img"
          />
          <h3 className="team-member-name">Tinggal Aceh 4</h3>
          <p className="team-member-role">Community Outreach Coordinator</p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Team;