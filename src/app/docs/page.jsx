"use client";
import React from 'react';
import './style.css';
import '../../styles/globals.css';
import Footer from "../../components/Footer/Footer" ;


function page() {
  return (
    <>
  
    <div class="download-section">
  <h1 class="card-heading font-merry mt-35">Audit Report</h1>
  <div class="download-content font-roboto">
    <h2>Ready to Download?</h2>
    <p>Click the button below to get your file instantly!</p>
    <a href="/path/to/your/file.pdf" download class="download-button">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24">
        <path
          d="M12 16.5l4-4h-3V3h-2v9.5H8l4 4zm6.99 2.5H5c-.55 0-1 .45-1 1v1h16v-1c0-.55-.45-1-1-1z"
          fill="currentColor"
        />
      </svg>
      Click Here to Download
    </a>
  </div>
  <Footer/>
</div>
  </>
  )
}

export default page