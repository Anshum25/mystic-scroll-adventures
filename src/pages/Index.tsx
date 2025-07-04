
import FantasyHeader from '@/components/FantasyHeader';
import StoryPanel from '@/components/StoryPanel';
import CommandInput from '@/components/CommandInput';
import PlayerSidebar from '@/components/PlayerSidebar';
import CommandLog from '@/components/CommandLog';

const Index = () => {
  return (
    <div className="min-h-screen bg-fantasy-gradient">
      {/* Magical background elements */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-mystical-gold rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-mystical-purple rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-60 left-1/4 w-1.5 h-1.5 bg-mystical-blue rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-mystical-gold rounded-full animate-pulse delay-3000"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-mystical-purple rounded-full animate-pulse delay-4000"></div>
      </div>
      
      <FantasyHeader />
      
      <div className="flex min-h-[calc(100vh-theme(spacing.20))]">
        {/* Main content area */}
        <div className="flex-1 p-6 space-y-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Story panel */}
            <StoryPanel />
            
            {/* Command input */}
            <CommandInput />
            
            {/* Command log */}
            <CommandLog />
          </div>
        </div>
        
        {/* Player sidebar */}
        <PlayerSidebar />
      </div>
      
      {/* Floating magical elements */}
      <div className="fixed bottom-10 left-10 w-16 h-16 opacity-30 pointer-events-none">
        <div className="w-full h-full border border-mystical-gold/40 rounded-full animate-pulse">
          <div className="w-8 h-8 bg-mystical-gold/20 rounded-full m-4 animate-float"></div>
        </div>
      </div>
      
      <div className="fixed top-1/3 right-10 w-12 h-12 opacity-20 pointer-events-none">
        <div className="w-full h-full border border-mystical-purple/40 rounded-full animate-pulse delay-1000">
          <div className="w-6 h-6 bg-mystical-purple/20 rounded-full m-3 animate-float delay-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
