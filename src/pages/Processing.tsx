import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Processing() {
  const navigate = useNavigate();

  // Simulate some processing time (e.g., image analysis or text processing)
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/result'); // Navigate to the result page after 5 seconds
    }, 5000); // Change this value to simulate processing time

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, [navigate]);

  return (
    <>

    <div className="processing-container">
        
      <b><h2 style={{   fontFamily: 'Inter',
                        fontSize: '24px', 
                        color: 'rgba(46, 46, 46, 1)', 
                        padding: '10px', 
                        textAlign: 'center', 
                        marginBottom: '30px' }}>
                <i className="fas fa-spinner fa-spin" style={{ fontSize: '40px', color: 'rgba(58, 186, 180, 1)', textAlign: 'center', marginBottom: '50px' }}></i><br/>Analyzing your content...</h2></b>
      <p style={{ fontFamily: 'Inter', fontSize: '16px', color: 'rgba(46, 46, 46, 1)', textAlign: 'center' }}>
        
      This might take a few seconds</p>
    </div>
    </>
  );
}

export default Processing;
