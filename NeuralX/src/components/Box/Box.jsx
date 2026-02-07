import React from 'react';
import './Box.css'; // Import the renamed CSS file
import { useRef } from "react";


const Box = () => {
  const fileInputRef = useRef(null);


  // Open file picker
  const handleClick = () => {
    fileInputRef.current.click();
  };

  // When file is selected
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    console.log("Selected file:", file);

    // Send file wherever you want
    uploadFile(file);
  };

  // Upload logic
  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:5000/analyze-report", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("Structured Data:", data);
    } catch (err) {
      console.error("Error analyzing report:", err);
    }
  };

  return (
    <div className="box-section-container">
      
      {/* --- 1. The Main Large Box (For Report Submission) --- */}
      <div className="submission-box">
        <h2>Lets Review Your Blood Report</h2>
        <p>Drag and drop your PDF or image here to start parsing.</p>
        <div className="placeholder-button">
          {/*Hidden file input*/}
          <input type="file" ref={fileInputRef} style={{ display: "none", }} onChange={handleFileChange}/>
          {/*Button*/}
          <button className="upload-button" onClick={handleClick}>
            Upload your Report
          </button>
        </div>
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