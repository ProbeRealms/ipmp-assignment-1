import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col font-sans">
      
      {/* Simple Navbar */}
      <nav className="p-6 flex justify-between items-center max-w-4xl mx-auto w-full">
        <div className="text-xl font-bold text-blue-400">Kanban</div>
        <Link href="/board" className="text-gray-300 hover:text-white transition">
          Go to Board
        </Link>
      </nav>

      {/* Main Content - Centered & Direct */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          Get Started.
        </h1>
        
        <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
          Organize your tasks.
        </p>
        
        <Link 
          href="/board" 
          className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-medium transition shadow-lg shadow-blue-900/20"
        >
          Task Board
        </Link>
      </main>

    </div>
  );
}