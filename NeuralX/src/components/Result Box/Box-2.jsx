function Box2() {
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
        left: '450px',
        zIndex: 9999,
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h3>Cholesterol</h3>
      <p><br></br>Cholesterol is Slightly Higher <br></br> Limiting oily foods and staying active can help</p>
    </div>
  );
}

export default Box2;