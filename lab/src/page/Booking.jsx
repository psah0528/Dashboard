import React, { useState } from 'react';
import './Booking.css';

function BookingPage() {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        date: '',
        bookingType: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to an API)
        console.log('Booking submitted:', formData);
        alert('Booking submitted successfully!');
        // Clear the form after submission
        setFormData({
            name: '',
            contact: '',
            date: '',
            bookingType: ''
        });
    };

    return (
        <div className="booking-page" id='booking'>
            <h2>Book Your Appointment</h2>
            <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="contact">Contact Number:</label>
                    <input
                        type="tel"
                        id="contact"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="bookingType">Booking Type:</label>
                    <select
                        id="bookingType"
                        name="bookingType"
                        value={formData.bookingType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select an option</option>
                        <option value="consultation">Consultation</option>
                        <option value="diagnostic">Diagnostic Test</option>
                        <option value="follow-up">Follow-Up</option>
                    </select>
                </div>
                <button type="submit" className="submit-button">Submit Booking</button>
            </form>
        </div>
    );
}

export default BookingPage;
