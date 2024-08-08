import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to Viktor Vatn Photography</h1>
      <Card>
        <CardContent className="p-6">
          <p className="text-lg mb-4">
            Explore the breathtaking beauty of nature through the lens of Viktor Vatn, a passionate Norwegian landscape photographer.
          </p>
          <div className="flex space-x-4">
            <Button as={Link} to="/about">About Me</Button>
            <Button as={Link} to="/gallery" variant="outline">View Gallery</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
