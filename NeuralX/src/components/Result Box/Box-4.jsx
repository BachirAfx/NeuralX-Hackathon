function Box4() {
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
        top: '500px',
        left: '100px',
        zIndex: 9999,
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h3>WBC Count</h3>
      <p><br></br>WBC Count is Normal <br></br> No action needed unless symptoms arise</p>
    </div>
  );
}

export default Box4;