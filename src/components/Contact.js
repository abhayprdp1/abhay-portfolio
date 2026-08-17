import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { sendEmail } from '../utils/emailService';
import SpinningFanIcon from './SpinningFanIcon';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const emailData = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      };

      const result = await sendEmail(emailData);

      if (result && result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setTimeout(() => setSubmitStatus(''), 7000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(''), 7000);
      }
    } catch (error) {
      console.error('Contact form submit error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 7000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section reveal" id="contact">
      <div className="section-badge-header">
        <SpinningFanIcon size={20} />
        <span>GET IN TOUCH</span>
      </div>

      <div className="contact-bento-grid">
        {/* Info Bento Card */}
        <div className="contact-info-card reveal-left">
          <div>
            <h3 className="info-card-title">Let's Connect</h3>
            <p className="info-card-subtitle">
              Have a project in mind, need a Software Engineering solution, or just want to connect? Reach out anytime!
            </p>
          </div>

          <div className="contact-items-list">
            <div className="contact-item">
              <div className="item-icon"><FaEnvelope /></div>
              <div className="item-text">
                <span className="item-label">Email</span>
                <a href="mailto:abhayprdp1@gmail.com" className="item-val link-val">
                  abhayprdp1@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="item-icon"><FaPhone /></div>
              <div className="item-text">
                <span className="item-label">Phone</span>
                <span className="item-val">+91 9037162165</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="item-icon"><FaMapMarkerAlt /></div>
              <div className="item-text">
                <span className="item-label">Location</span>
                <span className="item-val">Palakkad, Kerala, India</span>
              </div>
            </div>
          </div>

          <div className="info-card-socials">
            <span className="socials-label">Social Profiles</span>
            <div className="socials-btns-row">
              <a
                href="https://www.linkedin.com/in/pabhay"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill-btn"
              >
                <FaLinkedin size={15} /> LinkedIn
              </a>
              <a
                href="https://www.instagram.com/abh4.y"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill-btn"
              >
                <FaInstagram size={15} /> Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Form Bento Card */}
        <div className="contact-form-card reveal-right">
          <h3 className="form-card-title">Send a Message</h3>

          <form onSubmit={handleSubmit} className="contact-form-elements">
            <div className="form-row-2col">
              <div className="input-field-group">
                <label htmlFor="name" className="field-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="styled-input"
                  required
                />
              </div>

              <div className="input-field-group">
                <label htmlFor="email" className="field-label">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="styled-input"
                  required
                />
              </div>
            </div>

            <div className="input-field-group">
              <label htmlFor="subject" className="field-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry / Job Opportunity"
                className="styled-input"
                required
              />
            </div>

            <div className="input-field-group">
              <label htmlFor="message" className="field-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className="styled-textarea"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="submit-message-btn"
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <FaPaperPlane size={14} />
            </button>

            {submitStatus === 'success' && (
              <p className="form-feedback-msg msg-success">
                ✓ Message sent directly to abhayprdp1@gmail.com! I'll get back to you soon.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="form-feedback-msg msg-error">
                ✕ Couldn't send automatically. Please email directly to abhayprdp1@gmail.com.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;