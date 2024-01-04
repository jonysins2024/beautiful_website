import React, { useState } from 'react';

const ImageUploader = () => {
  const [images, setImages] = useState({
    image1: null,
    image2: null,
    image3: null,
    image4: null,
  });

  const handleImageChange = (event, imageName) => {
    const file = event.target.files[0];
    setImages((prevImages) => ({ ...prevImages, [imageName]: file }));
  };

  const convertToBase64 = () => {
    const base64Images = {};

    // Convert each image to base64
    Object.keys(images).forEach((imageName) => {
      const imageFile = images[imageName];
      if (imageFile) {
        const reader = new FileReader();
        reader.onloadend = () => {
          base64Images[imageName] = reader.result;
        };
        reader.readAsDataURL(imageFile);
      }
    });

    // Display base64-encoded images on console
    console.log(base64Images);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Image Uploader</h2>

      {/* Image Input 1 */}
      <div className="mb-4">
        <label htmlFor="image1" className="block text-sm font-medium text-gray-700">
          Image 1
        </label>
        <input
          type="file"
          id="image1"
          accept="image/*"
          onChange={(e) => handleImageChange(e, 'image1')}
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {/* Image Input 2 */}
      <div className="mb-4">
        <label htmlFor="image2" className="block text-sm font-medium text-gray-700">
          Image 2
        </label>
        <input
          type="file"
          id="image2"
          accept="image/*"
          onChange={(e) => handleImageChange(e, 'image2')}
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {/* Image Input 3 */}
      <div className="mb-4">
        <label htmlFor="image3" className="block text-sm font-medium text-gray-700">
          Image 3
        </label>
        <input
          type="file"
          id="image3"
          accept="image/*"
          onChange={(e) => handleImageChange(e, 'image3')}
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {/* Image Input 4 */}
      <div className="mb-4">
        <label htmlFor="image4" className="block text-sm font-medium text-gray-700">
          Image 4
        </label>
        <input
          type="file"
          id="image4"
          accept="image/*"
          onChange={(e) => handleImageChange(e, 'image4')}
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {/* Button to Convert and Display Base64 */}
      <button
        onClick={convertToBase64}
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Convert to Base64
      </button>
    </div>
  );
};

export default ImageUploader;
