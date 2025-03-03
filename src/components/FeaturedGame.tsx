
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Game } from '@/lib/games';

interface FeaturedGameProps {
  game: Game;
}

const FeaturedGame = ({ game }: FeaturedGameProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative h-[70vh] w-full overflow-hidden transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0">
        <img
          src={game.coverUrl}
          alt={game.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>
      
      <div className="container relative h-full max-w-7xl mx-auto px-6 flex items-end pb-24">
        <div className="max-w-2xl animate-slide-in opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/90 text-white mb-4">
            Featured
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-balance">{game.title}</h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-prose">{game.description}</p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {game.platforms.map(platform => (
              <span key={platform} className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-foreground">
                {platform}
              </span>
            ))}
          </div>
          
          <Link 
            to={`/game/${game.id}`}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Explore
            <svg
              xmlns="http://www.w3.org/2000/svg" 
              className="ml-2 h-4 w-4" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedGame;
