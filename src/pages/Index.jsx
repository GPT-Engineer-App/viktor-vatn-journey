import { useState } from 'react';
import { Camera, Instagram, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", alt: "Mountain landscape" },
    { src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05", alt: "Forest river" },
    { src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d", alt: "Autumn forest" },
    { src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e", alt: "Misty mountains" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Viktor Vatn</h1>
          <nav>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Gallery</Button>
            <Button variant="ghost">Contact</Button>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <Card>
            <CardContent className="flex items-center p-6">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" alt="Viktor Vatn" className="w-32 h-32 rounded-full mr-6" />
              <div>
                <p className="text-lg mb-2">
                  Hello! I'm Viktor Vatn, a passionate Norwegian photographer specializing in capturing the raw beauty of nature and landscapes.
                </p>
                <p>
                  With over a decade of experience, I strive to bring the serenity and majesty of the natural world into your homes through my lens.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Featured Works</h2>
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
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <Card>
            <CardContent className="p-6">
              <p className="mb-4">Interested in prints or collaborations? Feel free to reach out!</p>
              <div className="flex space-x-4">
                <Button><Mail className="mr-2 h-4 w-4" /> Email</Button>
                <Button variant="outline"><Instagram className="mr-2 h-4 w-4" /> Instagram</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-full max-h-full object-contain" />
        </div>
      )}
    </div>
  );
};

export default Index;
