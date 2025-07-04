
import { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

const StoryPanel = () => {
  const [currentStory] = useState(
    "You stand before the entrance to an ancient, moss-covered dungeon. The stone archway is carved with mysterious runes that seem to shimmer with a faint, otherworldly light. A cold wind howls from the depths below, carrying with it the scent of damp earth and something... else. Something ancient and dangerous.\n\nYour torch flickers in the darkness, casting dancing shadows on the weathered walls. You can hear the distant sound of dripping water echoing from somewhere deep within the labyrinthine passages ahead.\n\nWhat do you choose to do?"
  );

  return (
    <div className="relative">
      {/* Decorative corners */}
      <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-mystical-gold opacity-60"></div>
      <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-mystical-gold opacity-60"></div>
      <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-mystical-gold opacity-60"></div>
      <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-mystical-gold opacity-60"></div>

      {/* Main story container */}
      <div className="parchment-texture rounded-lg p-8 relative min-h-[300px] border border-mystical-gold/20">
        {/* Parchment burns/tears effect */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-transparent via-parchment-burnt/30 to-transparent rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-transparent via-parchment-burnt/20 to-transparent rounded-tr-full"></div>

        {/* Story content */}
        <ScrollArea className="h-full">
          <div className="relative z-10">
            <h2 className="text-xl font-fantasy text-dungeon-dark mb-4 text-center">
              The Tale Unfolds...
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-dungeon-dark font-parchment leading-relaxed text-lg whitespace-pre-line">
                {currentStory}
              </p>
            </div>

            {/* Decorative scroll end */}
            <div className="flex justify-center mt-6">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-mystical-gold to-transparent"></div>
            </div>
          </div>
        </ScrollArea>

        {/* Magical sparkles */}
        <div className="absolute top-4 right-8 w-2 h-2 bg-mystical-gold rounded-full animate-pulse opacity-70"></div>
        <div className="absolute bottom-6 left-6 w-1 h-1 bg-mystical-purple rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-mystical-blue rounded-full animate-pulse opacity-60"></div>
      </div>
    </div>
  );
};

export default StoryPanel;
