import emailjs from '@emailjs/browser';

// EmailJS configuration - using direct values as fallback
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'abhayprdp1';
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_5x9fp6d';
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '83SDKn_QLWyfcfEFI';

console.log('=== EmailJS Service Initialization ===');
console.log('Service ID:', SERVICE_ID);
console.log('Template ID:', TEMPLATE_ID);
console.log('Public Key:', PUBLIC_KEY ? PUBLIC_KEY.substring(0, 8) + '...' : 'undefined');

// Initialize EmailJS
emailjs.init(PUBLIC_KEY);

export const sendEmail = async (formData) => {
  console.log('=== sendEmail function called ===');
  console.log('Form data received:', formData);
  
  try {
    // Validate form data
    if (!formData.from_name || !formData.from_email || !formData.message) {
      const missingFields = [];
      if (!formData.from_name) missingFields.push('name');
      if (!formData.from_email) missingFields.push('email');
      if (!formData.message) missingFields.push('message');
      
      console.error('❌ Missing form fields:', missingFields);
      throw new Error(`Please fill in all required fields: ${missingFields.join(', ')}`);
    }

    const emailParams = {
      from_name: formData.from_name,
      from_email: formData.from_email,
      subject: formData.subject || 'New Contact Form Submission',
      message: formData.message,
      to_name: 'Abhay P',
      reply_to: formData.from_email,
    };

    console.log('📧 Sending email with parameters:', emailParams);
    console.log('📧 Using Service ID:', SERVICE_ID);
    console.log('📧 Using Template ID:', TEMPLATE_ID);

    // Send email using EmailJS
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      emailParams,
      PUBLIC_KEY
    );

    console.log('✅ EmailJS Response:', result);

    // Check if email was sent successfully
    if (result.status === 200) {
      console.log('✅ Email sent successfully!');
      return { success: true, data: result };
    } else {
      console.error('❌ Unexpected status code:', result.status);
      throw new Error(`Failed to send email. Status: ${result.status}`);
    }

  } catch (error) {
    console.error('❌ EmailJS Error Details:');
    console.error('Error message:', error.message);
    console.error('Error object:', error);
    
    return { 
      success: false, 
      error: error.message || 'Failed to send email. Please try again.' 
    };
  }
};

// Test function to verify EmailJS setup
export const testEmailSetup = () => {
  console.log('EmailJS Configuration:');
  console.log('Service ID:', SERVICE_ID);
  console.log('Template ID:', TEMPLATE_ID);
  console.log('Public Key:', PUBLIC_KEY ? 'Set' : 'Not Set');
  
  return {
    serviceId: SERVICE_ID,
    templateId: TEMPLATE_ID,
    publicKey: PUBLIC_KEY ? 'Set' : 'Not Set'
  };
};