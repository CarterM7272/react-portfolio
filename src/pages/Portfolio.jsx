import React from 'react';

export default function Portfolio() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '10px',
    },
    project: {
      backgroundColor: '#fff',
      borderRadius: '10px',
      padding: '1rem',
      margin: '1rem',
      width: '80%',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    },
    project1: {
      backgroundColor: '#ffcdd2',
    },
    project2: {
      backgroundColor: '#c8e6c9',
    },
    project3: {
      backgroundColor: '#bbdefb',
    },
    project4: {
      backgroundColor: '#d1c4e9',
    },
  };

  return(
    <div style={styles.container}>
      <div style={{...styles.project, ...styles.project1}}>Hello</div>
      <div style={{...styles.project, ...styles.project2}}>Hello</div>
      <div style={{...styles.project, ...styles.project3}}>Hello</div>
      <div style={{...styles.project, ...styles.project4}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aliquam adipisci consequuntur, quaerat incidunt exercitationem tenetur expedita! Distinctio ea minima veniam ad aut quod illum nihil, pariatur asperiores, deserunt dolor. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe adipisci consequatur illum accusamus minima? Omnis aliquid sequi alias rerum molestiae explicabo eos libero, ipsum aspernatur voluptatibus nemo, mollitia similique et.</div>
    </div>
  )
}