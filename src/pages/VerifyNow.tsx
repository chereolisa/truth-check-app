import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Use useNavigate for routing in react-router-dom v6
import ImageUploader from '../components/ImageUploader';
import RecentChecks from '../components/RecentChecks';

function VerifyNow() {
  const navigate = useNavigate();  // Initialize the navigate function
  const [searchQuery, setSearchQuery] = useState('');
  const [recentChecks, setRecentChecks] = useState<Array<{ text: string, timestamp: number }>>([]);
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Handle the input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Handle image change (for the ImageUploader component)
  const handleImageChange = (file: File | null) => {
    setImageFile(file);
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion); // Set the search query to the suggestion
  };

  // Trigger search logic and store the recent search
  const performSearch = (query: string) => {
    if (!query.trim() && !imageFile) {
      alert('Please enter a query or upload an image to verify.');
      return;
    }

    // Store the recent search with timestamp
    const newSearch = {
      text: query,
      timestamp: Date.now(),  // Current time in milliseconds
    };
    setRecentChecks([newSearch, ...recentChecks].slice(0, 5));  // Keep the latest 5 searches

    // Navigate to the processing page
    navigate('/processing');  // Navigate to the '/processing' route
  };

  // Check if the submit button can be clicked (disabled if no query or image)
  const isSubmitDisabled = !(searchQuery.trim() || imageFile);

  return (
    <div className="verify-container">
      <div className="verify-form">
        <form action="">
          <input
            type="text"
            placeholder="Paste or type a URL, headline, or statement to fact check..."
            className="verify-input"
            value={searchQuery}
            onChange={handleSearchChange} // Handle input change
          />

          <div className="verify-btns">
            <button
              type="button"
              className="verify-image-btn"
              style={{ background: "rgba(58, 186, 180, 1)" }}
              onClick={() => performSearch(searchQuery)} // Trigger search for image
              disabled={isSubmitDisabled} // Disable if no search query or image is available
            >
              <i className="fas fa-image" style={{ color: 'white', fontSize: '24px' }}></i>&nbsp;&nbsp;Check Image
            </button>

            <button
              type="button"
              className="verify-text-btn"
              style={{ background: "rgba(17, 32, 63, 1)" }}
              onClick={() => performSearch(searchQuery)} // Trigger search for text
              disabled={isSubmitDisabled} // Disable if no search query or image is available
            >
              <i className="fas fa-file" style={{ fontSize: '24px', color: 'white' }}></i>&nbsp;&nbsp;Check Text
            </button>
          </div>

          <div className="image-uploader">
            <ImageUploader onImageChange={handleImageChange} /> {/* Pass handleImageChange to the uploader */}
          </div>
        </form>

        {/* Suggestion Buttons */}
        <div className="suggestion-buttons">
          <button onClick={() => handleSuggestionClick('Was the Election rigged?')} className="suggestion-btn">
            Was the Election rigged?
          </button>
          <button onClick={() => handleSuggestionClick('Is Nigeria the largest country in Africa?')} className="suggestion-btn">
            Is Nigeria the largest country in Africa?
          </button>
          <button onClick={() => handleSuggestionClick('Is the CC9 Vaccine safe?')} className="suggestion-btn">
            Is the CC9 Vaccine safe?
          </button>
        </div>
      </div>

    </div>
  );
}

export default VerifyNow;
