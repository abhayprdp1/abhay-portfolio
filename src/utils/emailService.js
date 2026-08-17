// Direct Automatic Email Service using FormSubmit.co API
// Sends messages directly & automatically to abhayprdp1@gmail.com

export const sendEmail = async (formData) => {
  console.log('=== Sending Automatic Email to abhayprdp1@gmail.com ===');
  console.log('Form data:', formData);

  try {
    if (!formData.from_name || !formData.from_email || !formData.message) {
      throw new Error('Please fill in all required fields.');
    }

    // Post directly to FormSubmit API endpoint for abhayprdp1@gmail.com
    const response = await fetch('https://formsubmit.co/ajax/abhayprdp1@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formData.from_name,
        email: formData.from_email,
        _subject: formData.subject || `New Portfolio Message from ${formData.from_name}`,
        message: formData.message,
        _captcha: 'false' // Disable captcha for seamless submission
      })
    });

    const data = await response.json();
    console.log('FormSubmit API Response:', data);

    if (response.ok) {
      return { success: true, data };
    } else {
      throw new Error(data.message || 'Failed to send message.');
    }
  } catch (error) {
    console.error('Email Sending Error:', error);
    return {
      success: false,
      error: error.message || 'Failed to send email.'
    };
  }
};

export const testEmailSetup = () => {
  return {
    targetEmail: 'abhayprdp1@gmail.com',
    status: 'Ready'
  };
};