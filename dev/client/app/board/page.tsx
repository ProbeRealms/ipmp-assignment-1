import Link from 'next/link';
import React from 'react';

// Simple interface for display only
interface Task {
  id: string;
  title: string;
  status: 'TODO' | 'IN_PROGRESS' | 'DONE'; 
}

// Static Data
const TASKS: Task[] = [
  // TODO
  { id: '1', title: 'To do', status: 'TODO' },
  
  // IN PROGRESS
  { id: '2', title: 'Doing now', status: 'IN_PROGRESS' },
  
  // DONE
  { id: '3', title: 'Done!', status: 'DONE' }
];

export default function KanbanBoard() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 p-8 font-sans overflow-x-auto">

      <div className="min-w-[1200px] mx-auto">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Kanban
            </h1>
          </div>
          <Link href="/" className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition border border-slate-700">
            Back Home
          </Link>
        </header>

        {/* Board Columns */}
        <div className="flex gap-6 pb-8">
          <Column 
            title="To Do" 
            status="TODO" 
            color="border-yellow-500"
          />

          <Column 
            title="In Progress" 
            status="IN_PROGRESS" 
            color="border-blue-500"
          />

          <Column 
            title="Done" 
            status="DONE" 
            color="border-green-500"
          />
        </div>

      </div>
    </div>
  );
}

function Column({ title, status, color }: any) {
  // Filter tasks for this column
  const columnTasks = TASKS.filter((t) => t.status === status);

  return (
    <div className={`w-1/3 bg-slate-900/50 rounded-xl p-4 border-t-4 ${color} min-h-[500px] backdrop-blur-sm`}>
      <h2 className="text-xl font-semibold mb-4 text-slate-200 flex justify-between items-center">
        {title} 
        {/* Simplified Badge Style */}
        <span className="text-xs px-2 py-1 rounded-full border bg-slate-800 border-slate-700 text-slate-400">
          {columnTasks.length}
        </span>
      </h2>
      
      <div className="space-y-3">
        {columnTasks.map((task) => (
          <div key={task.id} className="bg-slate-800 p-4 rounded-lg shadow-sm border border-slate-700/50">
            <h3 className="font-medium text-white">{task.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}