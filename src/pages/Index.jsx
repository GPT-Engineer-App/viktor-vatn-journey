import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80')"}}>
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-white max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Viktor Vatn Photography</h1>
        <p className="text-xl mb-6">
          Capturing the raw beauty of Norwegian landscapes through the lens of passion and precision.
        </p>
        <div className="flex space-x-4">
          <Button as={Link} to="/gallery" className="bg-white text-black hover:bg-gray-200">Explore Gallery</Button>
          <Button as={Link} to="/about" variant="outline" className="text-white border-white hover:bg-white hover:text-black">About Me</Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
