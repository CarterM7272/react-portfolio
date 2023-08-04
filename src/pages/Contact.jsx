import React from 'react';

export default function Contact() {
  const style = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: '#f5f5f5',
      padding: '50px',
    },
    formItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      margin: '10px',
    },
    formInput: {
      padding: '10px',
      width: '300px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      marginTop: '5px',
    },
    title: {
      color: '#333',
      fontFamily: 'Arial, sans-serif',
      marginBottom: '20px',
    }
  };

  return (
    <div style={style.container}>
      <h1 style={style.title}>Contact</h1>

      <div style={style.formItem}>
        <p>Name:</p>
        <input type="text" style={style.formInput} />
      </div>

      <div style={style.formItem}>
        <p>Email address:</p>
        <input type="text" style={style.formInput} />
      </div>

      <div style={style.formItem}>
        <p>Message:</p>
        <textarea style={style.formInput} rows="5" />
      </div>
    </div>
  );
}