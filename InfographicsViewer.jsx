import React, { useState } from 'react';
import { Layout, FileText, BookOpen, FlaskConical } from 'lucide-react';

// A statikus HTML fájlokat helyezd a 'public/infografika/' mappába!
const INFOGRAPHICS = [
  { id: 'index', title: 'Projekt Index', category: 'Alapok', icon: BookOpen, file: '/infografika/ProjektIndex.html' },
  { id: 'fullstack', title: 'Fullstack & CRUD', category: 'Alapok', icon: Layout, file: '/infografika/Fullstack_CRUD.html' },
  { id: 'mvc', title: 'MVC Minta', category: 'Alapok', icon: Layout, file: '/infografika/MVCMinta.html' },
  { id: 'app', title: 'App.jsx', category: 'Komponensek', icon: FileText, file: '/infografika/App.html' },
  { id: 'userform', title: 'UserForm.jsx', category: 'Komponensek', icon: FileText, file: '/infografika/UserForm.html' },
  { id: 'usertable', title: 'UserTable.jsx', category: 'Komponensek', icon: FileText, file: '/infografika/UserTable.html' },
  { id: 'userrow', title: 'UserTableRow.jsx', category: 'Komponensek', icon: FileText, file: '/infografika/UserTableRow.html' },
  { id: 'teszt_altalanos', title: 'Általános Tesztelés', category: 'Tesztelés', icon: FlaskConical, file: '/infografika/TesztelesAltalanos.html' },
  { id: 'teszt_unit', title: 'Unit Tesztelés', category: 'Tesztelés', icon: FlaskConical, file: '/infografika/UnitTeszt.html' },
  { id: 'teszt_int', title: 'Integrációs Teszt', category: 'Tesztelés', icon: FlaskConical, file: '/infografika/IntegraciosTeszt.html' },
];

const InfographicsViewer = () => {
  const [activeTab, setActiveTab] = useState(INFOGRAPHICS[0].id);
  const activeItem = INFOGRAPHICS.find(item => item.id === activeTab) || INFOGRAPHICS[0];

  return (
    <div className="flex h-screen bg-slate-900 overflow-hidden font-sans">
      {/* Oldalsó menü (Sidebar) */}
      <div className="w-72 bg-slate-950 border-r border-slate-800 text-slate-300 flex flex-col flex-shrink-0">
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-xl font-black text-white uppercase tracking-wider">
            Dokumentáció <span className="text-indigo-500">Központ</span>
          </h1>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {INFOGRAPHICS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50' 
                    : 'hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-indigo-200' : 'text-slate-500'} />
                <span className="font-medium text-sm text-left">{item.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Fő tartalom (Main Content) */}
      <div className="flex-1 bg-slate-50 overflow-hidden">
        <iframe 
          src={activeItem.file} 
          title={activeItem.title}
          className="w-full h-full border-0"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </div>
  );
};

export default InfographicsViewer;