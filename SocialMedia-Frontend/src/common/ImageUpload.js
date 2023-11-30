import React, { useState } from "react";

const ImageUpload = ({ onImageChange }) => {
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    onImageChange(file);
  };

  return (
    <div>
      <label htmlFor="image" className="label">
        Image Upload:
      </label>
      <input
        id="image"
        name="image"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {imageFile && (
        <div>
          <img
            src={URL.createObjectURL(imageFile)}
            alt="Selected"
            className="post-img"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
