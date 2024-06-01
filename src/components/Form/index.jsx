import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'success', 'error'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://formspree.io/f/xnqekpoz', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            setSubmissionStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } else {
            setSubmissionStatus('error');
        }
    };

    return (
        <Card className="contact-card h-100">
            <Card.Body>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your name"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label>Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Enter your message"
                            className="form-control"
                            rows="5"
                        />
                    </div>
                    <div className="d-flex align-items-center">
                        <button type="submit" className="">Send</button>
                        {submissionStatus === 'success' && (
                            <span className="ms-3 ">Message sent</span>
                        )}
                        {submissionStatus === 'error' && (
                            <span className="ms-3">Failed to send message</span>
                        )}
                    </div>
                </form>
            </Card.Body>
        </Card>
    );
};

export default ContactForm;
