import React from 'react';
import '../styles/Teamcss.css'; // Ensure this path is correct

const Team = ({ id }: { id?: string }) => {
  return (
    <section id={id} className='latar'>
      <div className="team-page">
        {/* Bagian Title dan Deskripsi */}
        <div className="team-intro">
          <h1 className="team-title">Our Team</h1>
          <p className="team-description">
            Aceh Aquatic Youth is led by dedicated individuals with a strong commitment to environmental conservation. 34 other members with expertise in marine biology, diving, and environmental education.
          </p>
          <div className="gambar">
              <img
                src='./assets/teamv1.jpeg'
                alt="Coral reef conservation by Aquathic Aceh"
                className="image"
              />
            </div>
        </div>

        {/* Our Programs Section */}
        <div className="team-programs">
          <h1 className="team-title">Our Programs</h1>
          <div className="team-content">
              <h2 className='deskripsi'>Aceh Aquatic Youth runs several programs aimed at preserving and restoring the coral reef ecosystems of Aceh, including:</h2>
            
              <h2 className='h2des'>1. Coral Reef Restoration</h2>
              <p>
                We conduct coral planting activities to rehabilitate damaged areas and encourage the growth of healthy coral reefs.
              </p>
              <h2 className='h2des'>2. Education and Outreach</h2>
              <p>
                Educational programs aimed at raising awareness among local communities, especially the younger generation, about the importance of coral reef conservation and marine ecosystems.
              </p>

              <h2 className='h2des'>3. Coral Reef Monitoring</h2>
              <p>
                Regular research and monitoring to assess the health of coral reefs and identify any threats they may face.
              </p>
              <h2 className='h2des'>4. Environmental Campaigns</h2>
              <p>
                Hosting social media campaigns and community events to raise awareness about the dangers of coral reef destruction and the need for marine conservation.
              </p>
        
          </div>
        </div>
        
      </div>
      <div className='donasi'>
          <h1>Help Us Preserve Coral Reefs!</h1>
          <h2>We hope this website serves as a valuable source of information for all those who care about the preservation of marine life, particularly coral reefs in Aceh. Thank you for supporting our efforts!</h2>
          <h2>Your support is crucial to advancing our conservation programs. You can donate through the following account </h2>
          <p>•	Bank: Bank Syariah Indonesia </p>
          <p>•	Account Number: 7285238948 (Aceh Aquatic Youth) </p>


        </div>
    </section>
  );
};

export default Team;