import React from 'react';
const HEADER_HEIGHT = '80px';  

function Home() {
  const styles = {
    homeContainer: {
      paddingTop: HEADER_HEIGHT,
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'white',
    },
    welcomeText: {
      color: '#333',
      fontFamily: 'Arial, sans-serif',
      fontSize: '2em',
      textAlign: 'center',
      maxWidth: '600px',
      margin: '0 auto',
    }
  };


  return (
    <div style={styles.homeContainer}>
      <h1 style={styles.welcomeText}>Welcome to My Portfolio</h1>
      <p style={styles.welcomeText}>
        I'm Carter Markham, a passionate Team-leader focused on building responsive, user-centric web applications. With expertise in React, I've worked on a variety of projects that I'm excited to showcase here. Take a look around, and don't hesitate to reach out if you have any questions or would like to discuss potential collaborations.
      </p>
    </div>
  );
};

export default Home;