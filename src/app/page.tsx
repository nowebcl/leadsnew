import QuoteGenerator from '@/components/QuoteGenerator';

export default function Home() {
  return (
    <main className="h-screen w-screen relative flex flex-col overflow-hidden bg-[#05050b]">
      {/* Background Orbs / Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
      
      {/* Subtle Noise Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      
      {/* Center the component but keep it within bounds */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <QuoteGenerator />
      </div>
    </main>
  );
}
