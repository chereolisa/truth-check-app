import React, { useState } from 'react';

interface ImageUploaderProps {
  onImageChange: (file: File | null) => void;  // Prop to update the parent state
}

function ImageUploader({ onImageChange }: ImageUploaderProps) {
  const [image, setImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isFileInputVisible, setIsFileInputVisible] = useState(false);

  // Handle file input visibility toggle
  const handleLinkClick = () => {
    setIsFileInputVisible(true); // Show the file input when the link is clicked
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string); // Store the image as a base64 string for preview
        onImageChange(file);  // Notify the parent component
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!imageFile) return;

    const formData = new FormData();
    formData.append("file", imageFile);

    try {
      const response = await fetch('your-upload-url-here', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log("Image uploaded successfully!");
      } else {
        console.error("Image upload failed!");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      {/* Show the link to trigger file input visibility */}
      <a href="#" onClick={handleLinkClick} className="upload-image">Tap to upload image</a>

      {/* File input, initially hidden */}
      {isFileInputVisible && (
        <input
          type="file"
          accept="image/*" // Only allows image files
          onChange={handleImageChange}
          style={{ display: 'block', marginTop: '10px' }} // Show input when link is clicked
        />
      )}

      {/* Display preview if an image is selected */}
      {image && <img src={image} alt="Uploaded Preview" style={{ width: '100px', height: '100px' }} />}

      {/* Upload button */}
      {imageFile && (
        <button onClick={handleUpload} style={{ marginTop: '10px' }}>
          Upload Image
        </button>
      )}
    </div>
  );
}

export default ImageUploader;
