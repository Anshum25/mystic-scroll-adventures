
import { ScrollArea } from '@/components/ui/scroll-area';
import { User, Crown } from 'lucide-react';

const CommandLog = () => {
  const gameHistory = [
    {
      type: 'story',
      content: 'Welcome, brave adventurer! Your journey begins at the entrance of an ancient dungeon...',
      timestamp: '10:30 AM'
    },
    {
      type: 'player',
      content: 'examine the entrance',
      timestamp: '10:31 AM'
    },
    {
      type: 'story',
      content: 'You notice strange runes carved into the stone archway. They seem to pulse with a faint magical energy. The air grows colder as you approach.',
      timestamp: '10:31 AM'
    },
    {
      type: 'player',
      content: 'touch the runes',
      timestamp: '10:32 AM'
    },
    {
      type: 'story',
      content: 'As your fingers make contact with the ancient symbols, they begin to glow brighter. You feel a surge of power, and suddenly the heavy stone door begins to creak open...',
      timestamp: '10:32 AM'
    },
    {
      type: 'player',
      content: 'enter the dungeon cautiously',
      timestamp: '10:33 AM'
    },
    {
      type: 'story',
      content: 'You step through the threshold into darkness. Your footsteps echo in the vast chamber ahead. You can make out the silhouettes of pillars and what appears to be multiple passages branching off from this main hall.',
      timestamp: '10:33 AM'
    }
  ];

  return (
    <div className="bg-dungeon-stone/30 rounded-lg border border-mystical-gold/20 backdrop-blur-sm">
      <div className="p-4 border-b border-mystical-gold/20">
        <h3 className="text-lg font-fantasy text-mystical-gold flex items-center">
          <Crown className="h-5 w-5 mr-2" />
          Chronicle of Adventures
        </h3>
      </div>
      
      <ScrollArea className="h-80 p-4">
        <div className="space-y-4">
          {gameHistory.map((entry, index) => (
            <div
              key={index}
              className={`flex space-x-3 ${
                entry.type === 'player' ? 'justify-end' : 'justify-start'
              }`}
            >
              {entry.type === 'story' && (
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gradient-to-br from-mystical-purple to-mystical-blue rounded-full flex items-center justify-center">
                    <Crown className="h-4 w-4 text-mystical-gold" />
                  </div>
                </div>
              )}
              
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                  entry.type === 'player'
                    ? 'bg-mystical-gold/20 text-parchment-light border border-mystical-gold/30'
                    : 'bg-dungeon-dark/60 text-parchment-light border border-mystical-purple/30'
                }`}
              >
                <p className="text-sm font-parchment leading-relaxed">
                  {entry.content}
                </p>
                <p className="text-xs text-parchment-burnt mt-2 opacity-70">
                  {entry.timestamp}
                </p>
              </div>
              
              {entry.type === 'player' && (
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-gradient-to-br from-mystical-gold to-mystical-gold/80 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-dungeon-dark" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CommandLog;
