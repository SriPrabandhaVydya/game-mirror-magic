
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled 
          ? 'glass-effect' 
          : 'bg-transparent'
      }`}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xl font-medium tracking-tight transition-opacity duration-300 hover:opacity-80"
          >
            GameMirror
          </Link>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {[
                { title: 'Home', path: '/' },
                { title: 'Collection', path: '/collection' },
                { title: 'About', path: '/about' }
              ].map(item => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className={`relative px-1 py-2 transition-colors duration-300
                      ${location.pathname === item.path 
                        ? 'text-primary font-medium' 
                        : 'text-foreground/80 hover:text-foreground'
                      }
                      after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 
                      after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right 
                      after:transition-transform after:duration-300 
                      ${location.pathname === item.path 
                        ? 'after:scale-x-100' 
                        : 'hover:after:scale-x-100 hover:after:origin-bottom-left'
                      }
                    `}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full transition-colors duration-300 hover:bg-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
              </svg>
            </button>
            
            <button className="md:hidden p-2 rounded-full transition-colors duration-300 hover:bg-secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                <line x1="4" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
