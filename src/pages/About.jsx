import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <Card className="bg-white shadow-lg">
        <CardContent className="flex flex-col md:flex-row items-center p-6">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" alt="Viktor Vatn" className="w-32 h-32 rounded-full mb-4 md:mb-0 md:mr-6" />
          <div className="text-gray-800">
            <p className="text-lg font-semibold mb-2">
              Hello! I'm Viktor Vatn, a passionate Norwegian photographer specializing in capturing the raw beauty of nature and landscapes.
            </p>
            <p className="text-base">
              With over a decade of experience, I strive to bring the serenity and majesty of the natural world into your homes through my lens.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
