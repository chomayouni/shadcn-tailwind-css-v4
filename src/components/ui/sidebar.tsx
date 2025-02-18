// filepath: /c:/Users/conno/Documents/GitHub/shadcn-tailwind-css-v4/src/components/ui/sidebar.tsx
import React, { useState } from 'react';
import { Home, Settings, Users, Mail, Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { title: 'Dashboard', icon: <Home className="w-5 h-5" /> },
    { title: 'Users', icon: <Users className="w-5 h-5" /> },
    { title: 'Messages', icon: <Mail className="w-5 h-5" /> },
    { title: 'Settings', icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <div className={`
        fixed top-0 left-0 h-full
        bg-gray-900 text-white
        transition-all duration-300 ease-in-out
        ${isOpen ? 'w-64' : 'w-0 lg:w-16'}
        lg:relative lg:block
      `}>
        <div className="flex flex-col h-full">
          <div className="p-4 text-xl font-bold text-center border-b border-gray-700">
            {isOpen ? 'Your App' : ''}
          </div>

          <nav className="flex-1 px-2 py-4 space-y-2 overflow-y-auto">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center px-4 py-2 text-gray-300 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
              >
                {item.icon}
                {isOpen && <span className="ml-3">{item.title}</span>}
              </a>
            ))}
          </nav>

          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-600" />
              {isOpen && (
                <div className="ml-3">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-gray-400">admin@example.com</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;