
import { Heart, Shield, Sword, Sparkles, Map, Scroll } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';

const PlayerSidebar = () => {
  const playerStats = {
    name: "Brave Adventurer",
    level: 3,
    health: 85,
    maxHealth: 100,
    mana: 40,
    maxMana: 60,
    experience: 750,
    nextLevel: 1000,
  };

  const inventory = [
    { name: "Rusty Sword", icon: Sword, rarity: "common" },
    { name: "Wooden Shield", icon: Shield, rarity: "common" },
    { name: "Healing Potion", icon: Heart, rarity: "uncommon" },
    { name: "Magic Scroll", icon: Scroll, rarity: "rare" },
    { name: "Ancient Map", icon: Map, rarity: "legendary" },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-gray-400';
      case 'uncommon': return 'text-green-400';
      case 'rare': return 'text-blue-400';
      case 'epic': return 'text-purple-400';
      case 'legendary': return 'text-mystical-gold';
      default: return 'text-parchment-light';
    }
  };

  return (
    <div className="w-80 bg-gradient-to-b from-dungeon-stone to-dungeon-dark border-l border-mystical-gold/30 p-6 space-y-6">
      {/* Player Info */}
      <div className="text-center">
        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-mystical-purple to-mystical-blue rounded-full flex items-center justify-center border-3 border-mystical-gold/50 mb-4">
          <Sparkles className="h-10 w-10 text-mystical-gold animate-pulse" />
        </div>
        <h3 className="text-xl font-fantasy text-mystical-gold mb-1">{playerStats.name}</h3>
        <p className="text-sm text-parchment-burnt">Level {playerStats.level} Adventurer</p>
      </div>

      {/* Health & Mana */}
      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Heart className="h-4 w-4 text-red-500" />
              <span className="text-sm font-fantasy text-parchment-light">Health</span>
            </div>
            <span className="text-sm text-parchment-light">{playerStats.health}/{playerStats.maxHealth}</span>
          </div>
          <Progress 
            value={(playerStats.health / playerStats.maxHealth) * 100} 
            className="h-3 bg-dungeon-dark"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-fantasy text-parchment-light">Mana</span>
            </div>
            <span className="text-sm text-parchment-light">{playerStats.mana}/{playerStats.maxMana}</span>
          </div>
          <Progress 
            value={(playerStats.mana / playerStats.maxMana) * 100} 
            className="h-3 bg-dungeon-dark"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-mystical-gold rounded-full"></div>
              <span className="text-sm font-fantasy text-parchment-light">Experience</span>
            </div>
            <span className="text-sm text-parchment-light">{playerStats.experience}/{playerStats.nextLevel}</span>
          </div>
          <Progress 
            value={(playerStats.experience / playerStats.nextLevel) * 100} 
            className="h-3 bg-dungeon-dark"
          />
        </div>
      </div>

      {/* Inventory */}
      <div>
        <h4 className="text-lg font-fantasy text-mystical-gold mb-4 flex items-center">
          <Shield className="h-5 w-5 mr-2" />
          Inventory
        </h4>
        <ScrollArea className="h-48 bg-dungeon-dark/50 rounded-lg p-3 border border-mystical-gold/20">
          <div className="space-y-3">
            {inventory.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-2 rounded hover:bg-mystical-purple/20 transition-colors cursor-pointer"
                >
                  <div className="w-8 h-8 bg-dungeon-stone rounded flex items-center justify-center">
                    <Icon className={`h-4 w-4 ${getRarityColor(item.rarity)}`} />
                  </div>
                  <span className={`text-sm font-parchment ${getRarityColor(item.rarity)}`}>
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </div>

      {/* Quest Progress */}
      <div>
        <h4 className="text-lg font-fantasy text-mystical-gold mb-4 flex items-center">
          <Map className="h-5 w-5 mr-2" />
          Current Quest
        </h4>
        <div className="bg-dungeon-dark/50 rounded-lg p-4 border border-mystical-gold/20">
          <p className="text-sm text-parchment-light font-parchment mb-2">
            Explore the Ancient Dungeon
          </p>
          <div className="flex items-center space-x-2 text-xs text-parchment-burnt">
            <div className="w-2 h-2 bg-mystical-green rounded-full"></div>
            <span>In Progress</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerSidebar;
