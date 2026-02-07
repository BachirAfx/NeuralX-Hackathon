function Box3() {
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
        left: '450px',
        zIndex: 9999,
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h3>Blood Sugar</h3>
      <p><br></br>Blood Sugar is Normal <br></br> Continue current diet and activity levels.</p>
    </div>
  );
}

export default Box3;