import React from 'react'

function About() {
  return (
    <div className = "about-page" style = {{padding : '2rem', maxWidth: '800px', margin: '0 auto'}}>
        <h1 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>About UCEK flash updates</h1>
        
        <p style={{fontSize: '1rem', lineHeight: '1.6'}}>
            <strong> UCEK flash updates</strong> is a platform built to keep students, faculty, and staff
        updated with the latest happenings in our campus. From academic announcements to
        cultural events, we bring all college-related news to one place.
        </p>

        <h2 style = {{marginTop : '2rem'}}>🎯 Our Mission</h2>
        <p>
            To provide a centralized, real-time platform for sharing trusted news and updates within the college community.
        </p>

        <h2 style={{marginTop: '2rem'}}>✨ Features</h2>
        <ul style={{paddingLeft : '1.55 rem'}}>
            <li>Access verified news and updates</li>
            <li>Staff-only article posting (with admin approval)</li>
            <li>Simple and mobile-friendly UI</li>
            <li>Fast and secure access with Google Sign-In</li>
        </ul>

        <h2 style = {{ marginTop: '2rem'}}>👥 Maintained and Managed By</h2>
        <p>
            This app is maintained by the college's B.Tech. students and approved faculty members. Only authorized staff can contribute articles.
        </p>

        <h2 style = {{ marginTop: '2rem'}}>📬 Contact</h2>
        <p>
            For queries or feedback, please contact us at <strong>reddijyothibhaskar@gmail.com</strong>
        </p>
    </div>
  );
}

export default About;