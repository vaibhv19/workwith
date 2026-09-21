export default function ComingSoonPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden bg-[#0a0a0c] text-slate-100">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-pink-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-xl text-center space-y-6 animate-fade-in">
        {/* Domain Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-400 backdrop-blur-md shadow-inner">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          workwith.vaibhv19.dev
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
          Work With Me — Coming Soon
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-md mx-auto">
          A space for freelance work, collaboration, and things worth building together.
        </p>
      </div>

      {/* Subtle Footer */}
      <footer className="absolute bottom-8 left-0 right-0 text-center text-xs text-slate-600 font-mono">
        &copy; {new Date().getFullYear()} Vaibhav Gupta
      </footer>
    </main>
  );
}
