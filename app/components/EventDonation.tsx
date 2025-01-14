"use client";

import React from "react";
import '../styles/EventDonationcss.css'
import { useRouter } from 'next/navigation';

const EventDonation = () => {
  const router = useRouter();

    const handledonate = () => {
        router.push('/buy-ticket?mode=donate'); // Tambahkan query parameter
    };
    const handlebuy = () => {
      router.push('/buy-ticket?mode=buyTicket'); // Tambahkan query parameter
  };
  return (
    
    <div className="event-donation-page">
      <h1 className="page-title">Event & Donations</h1>
      <div className="cards-container">
        {/* Kartu Donasi */}
        <div className="card donation-card">
          <h2 className="card-title">Donate Now!</h2>
          <h3 className="card-subtitle">ACEH AQUATIC YOUTH</h3>
          <p className="card-amount">Rp. 1.999.999.999</p>
          <p className="card-text">Total Funds Collected</p>
          <button onClick={handledonate} className="card-button donate-button">DONATE</button>
        
        </div>

        {/* Kartu Pendaftaran Acara */}
        <div className="card registration-card">
          <h2 className="card-title">Event Registration</h2>
          <h3 className="card-subtitle">AQUA SPRINT ACEH 2025</h3>
          <p className="card-amount">Rp. 199.999</p>
          <p className="card-text">27-31 January 2025</p>
          <button className="card-button register-button">REGISTER</button>
        </div>

        {/* Kartu Tiket Pengunjung */}
        <div className="card ticket-card">
          <h2 className="card-title">Spectator Tickets</h2>
          <h3 className="card-subtitle">AQUA SPRINT ACEH 2025</h3>
          <p className="card-amount">Rp. 1.999.999.999</p>
          <p className="card-text">Total Funds Collected</p>
          <button onClick={handlebuy} className="card-button ticket-button">BUY TICKET</button>
        </div>
      </div>

      <p className="terms-text">
        *See Event Ticket Terms and Donation Terms. If you have questions about donating or purchasing event tickets, please see the FAQ.
      </p>
    </div>
  );
};

export default EventDonation;