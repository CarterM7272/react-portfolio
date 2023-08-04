import React from 'react';
import picture from '../images/anime-avatar.jpg';

export default function AboutMe() {
  const style = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      padding: '50px',
      background: '#f5f5f5',
    },
    innerContainer: {
      maxWidth: '800px',
      background: '#fff',
      borderRadius: '5px',
      padding: '30px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      marginBottom: '20px',
    },
    image: {
      width: '150px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '20px',
    },
    description: {
      color: '#666',
      fontFamily: 'Arial, sans-serif',
      fontSize: '16px',
      lineHeight: '1.5',
      textAlign: 'justify',
    },
  };

  return (
    <div style={style.container}>
      <div style={style.innerContainer}>
        <h2 style={style.title}>About Me</h2>
        <img 
          src={picture} 
          alt="user-avatar" 
          style={style.image} 
        />
        <p style={style.description}>
          Becoming a hardworking developer with diverse job experience, including management, cashier, and plumber roles, has been a transformative journey of growth and adaptability. Starting out as a cashier taught me the value of customer service and attention to detail, skills that would prove invaluable in my subsequent career pursuits. Transitioning into management provided the opportunity to lead and motivate teams, honing my communication and organizational prowess. However, it was my unexpected foray into plumbing that taught me resilience and problem-solving, reminding me that challenges are stepping stones to growth. Embracing the world of software development, I amalgamated these multifaceted experiences into my work, cultivating an unyielding work ethic, and fostering a deep understanding of end-users' needs. This amalgamation has not only empowered me to thrive as a developer but has also shaped me into a well-rounded professional capable of embracing any challenge with determination and skill.
        </p>
      </div>
    </div>
  );
};