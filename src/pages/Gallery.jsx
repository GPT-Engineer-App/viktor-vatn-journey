import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", alt: "Mountain landscape" },
    { src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05", alt: "Forest river" },
    { src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d", alt: "Autumn forest" },
    { src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e", alt: "Misty mountains" },
    { src: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f", alt: "Snowy peaks" },
    { src: "https://images.unsplash.com/photo-1542202229-7d93c33f5d07", alt: "Autumn lake" },
    { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", alt: "Beach sunset" },
    { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba", alt: "Starry night" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-full h-48 object-cover rounded-lg cursor-pointer transition-transform hover:scale-105"
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-full max-h-full object-contain" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
