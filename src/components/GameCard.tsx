
import { Link } from 'react-router-dom';
import { Game } from '@/lib/games';

interface GameCardProps {
  game: Game;
  index: number;
}

const GameCard = ({ game, index }: GameCardProps) => {
  return (
    <Link 
      to={`/game/${game.id}`}
      className="group relative overflow-hidden rounded-xl hover-scale"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-muted">
        <img 
          src={game.imageUrl} 
          alt={game.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-primary/90 text-white mb-2">
            {game.tags[0]}
          </span>
          <h3 className="text-white font-medium text-lg mb-1">{game.title}</h3>
          <p className="text-white/80 text-sm">{game.developer}</p>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
