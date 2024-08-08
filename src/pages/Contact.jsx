import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <Card>
        <CardContent className="p-6">
          <p className="mb-4">Interested in prints or collaborations? Feel free to reach out!</p>
          <div className="flex space-x-4">
            <Button><Mail className="mr-2 h-4 w-4" /> Email</Button>
            <Button variant="outline"><Instagram className="mr-2 h-4 w-4" /> Instagram</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
