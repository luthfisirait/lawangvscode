"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import "../styles/TicketFormcss.css";

import GooglePayButton from "@google-pay/button-react";


const TicketForm = () => {

  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nationality: "",
    email: "",
    ticketQuantity: 1,
    donationAmount: 0,
    paymentMethod: "",
  });

  const [emailError, setEmailError] = useState("");
  const [formType, setFormType] = useState<"buyTicket" | "donate">("buyTicket");
  const [paymentInstructions, setPaymentInstructions] = useState("");

  // Mendapatkan parameter dari URL
  const searchParams = useSearchParams();
  const type = searchParams.get("mode");

  // Daftar Negara
  const countries = [
    "Indonesia", "Malaysia", "Singapore", "Thailand", "Australia",
    "United States", "Canada", "United Kingdom", "Germany", "Japan", "South Korea", "France",
  ];

  // Daftar Metode Pembayaran
  const paymentMethods = [
    { value: "googlePay", label: "Google Pay" },
    { value: "applePay", label: "Apple Pay" },
    { value: "paypal", label: "PayPal" },
  ];

  // Validasi Email
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Handle Input Perubahan
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      if (!validateEmail(value)) {
        setEmailError("Invalid email format");
      } else {
        setEmailError("");
      }
    }
    if (name === "paymentMethod") {
      if (value === "googlePay") {
        setPaymentInstructions("Please complete your payment using Google Pay.");
      } else if (value === "applePay") {
        setPaymentInstructions("Please complete your payment using Apple Pay.");
      } else if (value === "paypal") {
        setPaymentInstructions("Please complete your payment using PayPal.");
      } else {
        setPaymentInstructions("");
      }
    }
  };

  const handleSubmit = async (paymentRequest: any) => {
    console.log("Google Pay payment data:", paymentRequest);

    const paymentData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      nationality: formData.nationality,
      email: formData.email,
      amount: formType === "buyTicket" ? formData.ticketQuantity : formData.donationAmount,
      paymentMethod: formData.paymentMethod,
      paymentToken: paymentRequest.paymentMethodData.tokenizationData.token,
    };

    try {
      const response = await fetch("/api/google-pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paymentData),
      });

      const responseData = await response.json();
      if (response.ok) {
        alert("Payment processed successfully!");
      } else {
        alert(`Error: ${responseData.error || "Payment failed"}`);
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("Error processing payment.");
    }
  };
    
  

  // Cek apakah form valid
  const isFormValid = () => {
    const { firstName, lastName, nationality, email, paymentMethod, ticketQuantity, donationAmount } = formData;
    if (!firstName || !lastName || !nationality || !email || !paymentMethod) return false;
    if (!validateEmail(email)) return false;
    if (formType === "buyTicket" && ticketQuantity <= 0) return false;
    if (formType === "donate" && donationAmount <= 0) return false;
    return true;
  };

  // Handle Submit


  // Set form type berdasarkan parameter
  useEffect(() => {
    if (type === "donate") {
      setFormType("donate");
    } else {
      setFormType("buyTicket");
    }
  }, [type]);

  return (
    <div className="ticket-form-container">
      <h2>{formType === "buyTicket" ? "Buy Tickets" : "Make a Donation"}</h2>
      <form onSubmit={handleSubmit} className="ticket-form">
        {/* First Name */}
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Last Name */}
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Nationality */}
        <div className="form-group">
          <label htmlFor="nationality">Nationality</label>
          <select
            id="nationality"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
          >
            <option value="">Select Country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {emailError && <span className="error-message">{emailError}</span>}
        </div>

        {/* Number of Tickets (Hanya tampil untuk type "ticket") */}
        {formType === "buyTicket" && (
          <div className="form-group">
            <label htmlFor="ticketQuantity">Number of Tickets</label>
            <input
              type="number"
              id="ticketQuantity"
              name="ticketQuantity"
              min="1"
              value={formData.ticketQuantity}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {/* Donation Amount (Hanya tampil untuk type "donation") */}
        {formType === "donate" && (
          <div className="form-group">
            <label htmlFor="donationAmount">Donation Amount</label>
            <input
              type="number"
              id="donationAmount"
              name="donationAmount"
              min="0"
              value={formData.donationAmount}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {/* Payment Method */}
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="">Select Payment Method</option>
            {paymentMethods.map((method) => (
              <option key={method.value} value={method.value}>
                {method.label}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        {paymentInstructions && <div className="payment-instructions">{paymentInstructions}</div>}
        <button type="submit" className="submit-button" disabled={!isFormValid()}>
          Submit
        </button>
        <GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}
/>;
      </form>
    </div>
  );
};

export default TicketForm;