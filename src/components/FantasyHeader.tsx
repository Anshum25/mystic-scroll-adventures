
import { useState } from 'react';
import { Sword, Shield, Crown, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FantasyHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#', icon: Crown },
    { name: 'Create Adventure', href: '#', icon: Sword },
    { name: 'Join Adventure', href: '#', icon: Shield },
    { name: 'Leaderboard', href: '#', icon: Crown },
    { name: 'Profile', href: '#', icon: User },
  ];

  return (
    <header className="relative z-50 bg-gradient-to-r from-dungeon-dark via-dungeon-stone to-dungeon-dark border-b-2 border-mystical-gold/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Sword className="h-8 w-8 text-mystical-gold animate-glow" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-mystical-purple rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-ancient text-mystical-gold animate-glow">
                AI Dungeon Master
              </h1>
              <p className="text-xs text-parchment-burnt font-fantasy">
                Epic adventures await...
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-parchment-light hover:text-mystical-gold transition-colors duration-300 font-fantasy"
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* User Avatar */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-mystical-purple to-mystical-blue rounded-full flex items-center justify-center border-2 border-mystical-gold/50">
                <User className="h-5 w-5 text-parchment-light" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-dungeon-dark"></div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-mystical-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-mystical-gold/30">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 text-parchment-light hover:text-mystical-gold transition-colors duration-300 font-fantasy py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default FantasyHeader;
