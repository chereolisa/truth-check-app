import React from 'react';
import { useNavigate } from 'react-router-dom';

function Result() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-2); 
  };

  return (
    <div className="result-container">
      <h2 style={{   fontFamily: 'Inter',
                        fontSize: '24px', 
                        color: 'rgba(46, 46, 46, 1)', 
                        padding: '10px', 
                        textAlign: 'center', 
                        marginBottom: '30px' }}>Result</h2>
      <p style={{ fontFamily: 'Inter', fontSize: '16px', color: 'rgba(46, 46, 46, 1)', textAlign: 'center' }}>Your result will be displayed here after processing.</p>

      {/* Go Back Button */}
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <button onClick={handleGoBack} style={{ padding: '10px 20px', marginTop: '30px', background: 'rgba(13, 25, 48, 1)', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', textAlign: 'center' }}>
        Go Back
      </button>
      </div>
    </div>
  );
}

export default Result;
