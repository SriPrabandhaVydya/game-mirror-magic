
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getGame } from '@/lib/games';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const GameDetail = () => {
  const { id } = useParams<{ id: string }>();
  const game = getGame(id || '');
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set isLoaded to true after a short delay to trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [id]);
  
  if (!game) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Game not found</h1>
        <Link 
          to="/"
          className="text-primary hover:underline"
        >
          Return to home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16">
        <div className="relative h-[60vh] w-full overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={game.coverUrl}
              alt={game.title}
              className={`h-full w-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
          
          <div className="container relative h-full max-w-7xl mx-auto px-6 flex items-end pb-12">
            <div className={`max-w-3xl transition-all duration-500 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center space-x-3 mb-4">
                <Link 
                  to="/"
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                    <path d="m15 18-6-6 6-6"/>
                  </svg>
                  Back
                </Link>
                <span className="text-muted-foreground">/</span>
                <span className="text-sm text-muted-foreground">{game.title}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-3">{game.title}</h1>
              <p className="text-lg text-muted-foreground mb-4">{game.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {game.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <section className="py-16 px-6">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className={`lg:col-span-2 transition-all duration-500 ease-out delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <h2 className="text-2xl font-bold mb-6">About the Game</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {game.longDescription}
                </p>
                
                <h3 className="text-xl font-medium mb-4">Key Features</h3>
                <ul className="space-y-3 mb-8">
                  {game.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-primary mt-1">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                        <path d="m9 12 2 2 4-4"/>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={`transition-all duration-500 ease-out delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="sticky top-24 p-6 rounded-xl border border-border bg-card">
                  <div className="aspect-[16/9] w-full overflow-hidden rounded-lg mb-6">
                    <img 
                      src={game.imageUrl} 
                      alt={game.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Developer</span>
                      <span className="font-medium">{game.developer}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Release Year</span>
                      <span className="font-medium">{game.releaseYear}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rating</span>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">{game.rating}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-muted-foreground block mb-2">Platforms</span>
                      <div className="flex flex-wrap gap-2">
                        {game.platforms.map(platform => (
                          <span 
                            key={platform} 
                            className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-medium"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GameDetail;
