import React from 'react';
import './Box.css'; // Import the renamed CSS file

const Box = () => {
  return (
    <div className="box-section-container">
      
      {/* --- 1. The Main Large Box (For Report Submission) --- */}
      <div className="submission-box">
        <h2>Lets Review Your Blood Report</h2>
        <p>Drag and drop your PDF or image here to start parsing.</p>
      </div>

      {/* --- 2. The Container for Small Boxes Below --- */}
      <div className="small-boxes-container">
        
        {/* Small Box 1 */}
        <div className="small-box">
          <h3>AI-Powered</h3>
          <p>Extracts data from unstructured files automatically.</p>
        </div>

        {/* Small Box 2 */}
        <div className="small-box">
          <h3>Handles Variations</h3>
          <p>Works with different lab layouts and formats.</p>
        </div>

        {/* Small Box 3 */}
        <div className="small-box">
          <h3>Structured Data</h3>
          <p>Converts reports into a clean health record.</p>
        </div>
        
        {/* Small Box 4 */}
        <div className="small-box">
          <h3>India-Centric</h3>
          <p>Optimized for Indian diagnostic laboratories.</p>
        </div>

      </div>
    </div>
  )
}

export default Box;