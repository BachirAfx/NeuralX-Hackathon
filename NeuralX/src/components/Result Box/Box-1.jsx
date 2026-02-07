function Box1() {
  return (
    <div
      style={{
        width: '300px',
        height: '200px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(1, 0, 0, 0.1)',
        backgroundColor: '#fbf2e4',
        color: 'black',
        position: 'fixed',
        top: '150px',
        left: '100px',
        zIndex: 9999,
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h3>Haemoglobin</h3>
      <p><br></br>Haemoglobin is normal <br></br> Keep a balanced diet to maintain healthy levels.</p>
    </div>
  );
}

export default Box1;
