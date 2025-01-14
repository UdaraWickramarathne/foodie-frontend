import React, { useState } from 'react';
import "@/pages/css/checkout.css";

const Checkout = () => {
  const [shippingOption, setShippingOption] = useState('HomeOffice');
  const [firstName, setFirstName] = useState('');
  const [lastName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleShippingChange = (event) => {
    setShippingOption(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log('Form submitted:', {
      shippingOption,
      firstName,
      lastName,
      address,
      phone,
    });
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>

      <div className="delivery-options">
        <h2>1. Delivery Options</h2>

        <div className="shipping-options">
          <label htmlFor="homeOffice">
            <input
              type="radio"
              id="homeOffice"
              name="shipping"
              value="HomeOffice"
              checked={shippingOption === 'HomeOffice'}
              onChange={handleShippingChange}
            />
            HomeOffice
          </label>

          <label htmlFor="APOSPO">
            <input
              type="radio"
              id="APOSPO"
              name="shipping"
              value="APOSPO"
              checked={shippingOption === 'APOSPO'}
              onChange={handleShippingChange}
            />
            APOSPO
          </label>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="shipping-address">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />

            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" value={lastName} readOnly />
          </div>

          <div className="address-field">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              value={address}
              onChange={handleAddressChange}
              required
            />
          </div>

          <div className="phone-field">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </div>

          <button type="submit">Save & Continue</button>
        </form>
      </div>

      {/* ... rest of the checkout UI (Payment, Order Summary, etc.) */}
    </div>
  );
};

export default Checkout;