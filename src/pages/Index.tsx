
import { useState, useEffect } from 'react';
import { getFeaturedGame, getAllGames } from '@/lib/games';
import FeaturedGame from '@/components/FeaturedGame';
import GameCard from '@/components/GameCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const featuredGame = getFeaturedGame();
  const allGames = getAllGames();
  
  useEffect(() => {
    // Set isLoaded to true after a short delay to trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <FeaturedGame game={featuredGame} />
        
        <section className="py-20 px-6">
          <div className="container max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
              <div className={`transition-opacity duration-500 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <span className="text-sm font-medium text-primary">Discover</span>
                <h2 className="text-3xl font-bold mt-1">Game Collection</h2>
                <p className="text-muted-foreground mt-2 max-w-lg">
                  Explore our curated selection of visually stunning and emotionally engaging games that push the boundaries of interactive art.
                </p>
              </div>
              
              <div className={`mt-6 md:mt-0 transition-opacity duration-500 ease-out delay-200 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <button className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                  View all games
                  <svg
                    xmlns="http://www.w3.org/2000/svg" 
                    className="ml-1 h-4 w-4" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {allGames.map((game, index) => (
                <div 
                  key={game.id}
                  className={`animate-fade-in opacity-0`}
                  style={{ animationDelay: `${(index + 1) * 150}ms`, animationFillMode: 'forwards' }}
                >
                  <GameCard game={game} index={index} />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 px-6 bg-muted/50">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-sm font-medium text-primary">Experience</span>
              <h2 className="text-3xl font-bold mt-1">Why GameMirror?</h2>
              <p className="text-muted-foreground mt-2">
                We're passionate about showcasing games that blend artistry, narrative depth, and innovative gameplay.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Curated Selection",
                  description: "We carefully select games that represent the pinnacle of artistic and narrative achievement.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles">
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                      <path d="M5 3v4"/>
                      <path d="M19 17v4"/>
                      <path d="M3 5h4"/>
                      <path d="M17 19h4"/>
                    </svg>
                  )
                },
                {
                  title: "Immersive Experiences",
                  description: "We highlight games that create deeply immersive worlds and emotional connections.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                    </svg>
                  )
                },
                {
                  title: "Thoughtful Analysis",
                  description: "We provide context and insight into what makes each game a masterpiece of interactive design.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb">
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
                      <path d="M9 18h6"/>
                      <path d="M10 22h4"/>
                    </svg>
                  )
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-sm border border-border transition-all duration-300 hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-medium text-xl mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
