import React from 'react'

function Contact() {
  return (
    <div className = "contact-page" style = {{ padding: '2rem', textAlign: 'center' }}>
        <h1>Contact Us</h1>
        <p>We'd love to hear your feedback! Please fill out the form below:</p>
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSewj57xkLy4l5EcutqJXPq-iIwB_RZL8X-UklNmEG1YcPDnBA/viewform?" 
            width="840" 
            height="988" 
            frameborder="0" 
            marginheight="0" 
            marginwidth="0">
            Loading…
          </iframe>
    </div>
  );
}

export default Contact;