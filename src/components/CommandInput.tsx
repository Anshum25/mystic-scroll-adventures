
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sparkles, Send } from 'lucide-react';

const CommandInput = () => {
  const [command, setCommand] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!command.trim()) return;
    
    setIsLoading(true);
    // Simulate AI processing
    setTimeout(() => {
      console.log('Command submitted:', command);
      setCommand('');
      setIsLoading(false);
    }, 2000);
  };

  const suggestions = [
    "explore the cave",
    "examine the runes",
    "light a torch",
    "listen carefully",
    "search for traps",
    "cast a spell"
  ];

  return (
    <div className="space-y-4">
      {/* Command input form */}
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex space-x-3">
          <div className="flex-1 relative">
            <Input
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              placeholder="Speak your intentions to the realm... (e.g., explore cave, attack dragon)"
              className="bg-dungeon-stone/80 border-mystical-gold/30 text-parchment-light placeholder:text-parchment-burnt/70 font-parchment text-lg py-6 pr-12 focus:border-mystical-gold focus:ring-2 focus:ring-mystical-gold/20"
              disabled={isLoading}
            />
            <Sparkles className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-mystical-gold/60 animate-pulse" />
          </div>
          
          <Button
            type="submit"
            disabled={!command.trim() || isLoading}
            className="bg-gradient-to-r from-mystical-gold to-mystical-gold/80 hover:from-mystical-gold/80 hover:to-mystical-gold text-dungeon-dark font-fantasy px-8 py-6 rune-glow"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-dungeon-dark border-t-transparent rounded-full animate-spin"></div>
                <span>Casting...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Send className="h-4 w-4" />
                <span>Cast</span>
              </div>
            )}
          </Button>
        </div>
      </form>

      {/* Quick suggestions */}
      <div className="flex flex-wrap gap-2">
        <span className="text-sm text-parchment-burnt font-fantasy">Quick actions:</span>
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => setCommand(suggestion)}
            className="text-xs bg-dungeon-stone/50 hover:bg-mystical-purple/30 text-parchment-light px-3 py-1 rounded-full border border-mystical-gold/20 hover:border-mystical-gold/40 transition-all duration-300 font-parchment"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CommandInput;
