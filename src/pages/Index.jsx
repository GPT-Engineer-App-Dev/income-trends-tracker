import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useQuery } from "@tanstack/react-query";

const fetchMarketData = async () => {
  // Placeholder for fetching market data
  return [
    { name: "S&P 500", value: 4500, change: "+1.2%" },
    { name: "Dow Jones", value: 35000, change: "+0.8%" },
    { name: "NASDAQ", value: 15000, change: "+1.5%" },
  ];
};

const Index = () => {
  const { data: marketData, isLoading } = useQuery({
    queryKey: ["marketData"],
    queryFn: fetchMarketData,
  });

  return (
    <div className="container mx-auto p-4">
      <section className="hero mb-8">
        <Card>
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
          <CardHeader>
            <CardTitle>Featured News Article</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Brief description of the featured news article.</p>
          </CardContent>
        </Card>
      </section>

      <section className="top-stories mb-8">
        <h2 className="text-2xl font-bold mb-4">Top Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((story) => (
            <Card key={story}>
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <CardHeader>
                <CardTitle>Top Story {story}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Brief description of the top story {story}.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="market-data mb-8">
        <h2 className="text-2xl font-bold mb-4">Market Data</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            marketData.map((market) => (
              <Card key={market.name}>
                <CardHeader>
                  <CardTitle>{market.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Value: {market.value}</p>
                  <p>Change: {market.change}</p>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </section>

      <section className="latest-news mb-8">
        <h2 className="text-2xl font-bold mb-4">Latest News</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((news) => (
            <div key={news} className="p-4 border rounded-md">
              <h3 className="font-bold">Latest News {news}</h3>
              <p>Timestamp</p>
            </div>
          ))}
        </div>
      </section>

      <aside className="sidebar mb-8">
        <section className="trending-topics mb-8">
          <h2 className="text-2xl font-bold mb-4">Trending Topics</h2>
          <ul className="list-disc list-inside">
            {[1, 2, 3, 4, 5].map((topic) => (
              <li key={topic}>Trending Topic {topic}</li>
            ))}
          </ul>
        </section>

        <section className="newsletter-signup mb-8">
          <h2 className="text-2xl font-bold mb-4">Newsletter Signup</h2>
          <Input placeholder="Enter your email" className="mb-4" />
          <Button>Sign Up</Button>
        </section>

        <section className="advertisements mb-8">
          <h2 className="text-2xl font-bold mb-4">Advertisements</h2>
          <div className="p-4 border rounded-md">
            <p>Ad Placeholder</p>
          </div>
        </section>
      </aside>

      <footer className="footer mt-8">
        <Separator />
        <div className="flex justify-between items-center py-4">
          <div className="flex space-x-4">
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
          <div className="flex space-x-4">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;