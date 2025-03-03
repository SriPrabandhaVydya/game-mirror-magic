
export interface Game {
  id: string;
  title: string;
  developer: string;
  description: string;
  longDescription: string;
  releaseYear: number;
  imageUrl: string;
  coverUrl: string;
  platforms: string[];
  tags: string[];
  rating: number;
  features: string[];
}

export const games: Game[] = [
  {
    id: "the-last-guardian",
    title: "The Last Guardian",
    developer: "Japan Studio",
    description: "An atmospheric adventure game about a young boy who befriends a giant creature named Trico.",
    longDescription: "The Last Guardian is an action-adventure game that follows the story of a young boy who befriends a giant half-bird-half-mammal creature called Trico. Set in a mysterious ancient world, players control the boy as they navigate through towering ruins, solve puzzles, and evade dangers, all while forming a deep bond with Trico. The game focuses on companionship and trust between the two protagonists, with gameplay centered around commanding Trico to overcome obstacles that the boy cannot manage alone. Created by the team that developed Ico and Shadow of the Colossus, The Last Guardian features a similar minimalist approach to storytelling and a focus on emotional connection.",
    releaseYear: 2016,
    imageUrl: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop",
    coverUrl: "https://images.unsplash.com/photo-1616055187286-1ea67ead57d8?q=80&w=2080&auto=format&fit=crop",
    platforms: ["PlayStation 4"],
    tags: ["Adventure", "Puzzle", "Atmospheric"],
    rating: 4.7,
    features: ["Emotional storytelling", "Advanced AI companion", "Beautiful environments", "Physics-based puzzles"]
  },
  {
    id: "journey",
    title: "Journey",
    developer: "thatgamecompany",
    description: "A visually stunning adventure through a vast desert towards a mountain in the distance.",
    longDescription: "Journey is an indie adventure game that takes players on a wordless pilgrimage through a vast desert towards a mountain in the distance. The game features a robed figure traveling through the ruins of an ancient civilization, encountering other players on similar journeys. Without words or traditional communication, players can assist each other by activating glyphs or singing musical chimes. The emotional adventure is complemented by a beautiful orchestral soundtrack that responds dynamically to player actions. Journey's artistic design, with its sweeping sand dunes and ancient architecture, creates a uniquely serene gaming experience. The game is renowned for its visual storytelling and the emotional connections it fosters between anonymous players.",
    releaseYear: 2012,
    imageUrl: "https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?q=80&w=2069&auto=format&fit=crop",
    coverUrl: "https://images.unsplash.com/photo-1518128958364-65859d70aa41?q=80&w=2069&auto=format&fit=crop",
    platforms: ["PlayStation 3", "PlayStation 4", "PC", "iOS"],
    tags: ["Adventure", "Indie", "Artistic", "Multiplayer"],
    rating: 4.9,
    features: ["Wordless storytelling", "Seamless multiplayer", "Award-winning soundtrack", "Emotional experience"]
  },
  {
    id: "hollow-knight",
    title: "Hollow Knight",
    developer: "Team Cherry",
    description: "A challenging metroidvania set in a vast, interconnected underground world.",
    longDescription: "Hollow Knight is a challenging 2D action-adventure game that takes place in Hallownest, a vast and ruined kingdom of insects and heroes. Players control the Knight, a small vessel with a nail (sword), exploring the interconnected world, fighting enemies, and uncovering the kingdom's mysteries. The game features hand-drawn art, tight controls, and a hauntingly beautiful orchestral soundtrack. Hollow Knight is known for its challenging boss battles, deep lore, and interconnected world design that rewards exploration. With multiple endings and hidden areas, the game offers a rich experience for those willing to delve into its depths. The atmospheric world-building and charming yet melancholic characters have earned it critical acclaim and a dedicated fan community.",
    releaseYear: 2017,
    imageUrl: "https://images.unsplash.com/photo-1506585210546-67a607ca862b?q=80&w=2070&auto=format&fit=crop",
    coverUrl: "https://images.unsplash.com/photo-1482855549413-2a6c9b1955a7?q=80&w=2070&auto=format&fit=crop",
    platforms: ["PC", "Nintendo Switch", "PlayStation 4", "Xbox One"],
    tags: ["Metroidvania", "Indie", "Difficult", "Atmospheric"],
    rating: 4.8,
    features: ["Hand-drawn art style", "Challenging combat", "Extensive world to explore", "Rich lore"]
  },
  {
    id: "control",
    title: "Control",
    developer: "Remedy Entertainment",
    description: "A supernatural action-adventure set in a secretive agency invaded by an otherworldly threat.",
    longDescription: "Control is a third-person action-adventure game that takes place in the Oldest House, a paranormal headquarters of the Federal Bureau of Control (FBC). Players take on the role of Jesse Faden, who arrives at the Bureau in search of her missing brother, only to find herself appointed as the new Director during a crisis. The Oldest House is under attack by a hostile force known as the Hiss, which has corrupted most of the Bureau's agents. Armed with the Director's transforming Service Weapon and telekinetic abilities, Jesse must navigate the ever-shifting architecture of the Oldest House, cleanse control points, and combat the Hiss. Control is known for its striking brutalist architecture, reality-bending physics, and a narrative steeped in New Weird fiction and SCP Foundation-like lore.",
    releaseYear: 2019,
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    coverUrl: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?q=80&w=2070&auto=format&fit=crop",
    platforms: ["PC", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X/S"],
    tags: ["Action", "Supernatural", "Sci-fi", "Telekinesis"],
    rating: 4.6,
    features: ["Destructible environments", "Supernatural abilities", "Reality-bending narrative", "Brutalist architecture"]
  }
];

export function getGame(id: string): Game | undefined {
  return games.find(game => game.id === id);
}

export function getAllGames(): Game[] {
  return games;
}

export function getFeaturedGame(): Game {
  // Return the first game as the featured one
  return games[0];
}
