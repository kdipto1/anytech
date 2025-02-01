import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const TabbedCarousel = () => {
  const carouselData = [
    {
      id: "card1",
      title: "Investment Solutions",
      content:
        "Comprehensive investment management tools and portfolio optimization strategies for modern investors.",
      image: "/api/placeholder/400/200",
    },
    {
      id: "card2",
      title: "Digital Banking",
      content:
        "Next-generation banking solutions with seamless integration and enhanced security features.",
      image: "/api/placeholder/400/200",
    },
    {
      id: "card3",
      title: "Payment Systems",
      content:
        "Advanced payment processing infrastructure for fast and secure transactions worldwide.",
      image: "/api/placeholder/400/200",
    },
    {
      id: "card4",
      title: "Risk Management",
      content:
        "Sophisticated risk assessment and management tools for financial institutions.",
      image: "/api/placeholder/400/200",
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <Tabs defaultValue="card1" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          {carouselData.map((item) => (
            <TabsTrigger
              key={item.id}
              value={item.id}
              className="text-sm font-medium transition-all"
            >
              {item.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {carouselData.map((item) => (
          <TabsContent
            key={item.id}
            value={item.id}
            className="mt-0 transition-all"
          >
            <Card className="border-none">
              <CardContent className="p-0">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TabbedCarousel;
