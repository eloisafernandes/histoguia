import React, { useState } from 'react';
import Sidebar from '../components/Menu.js';
import SearchBar from '../components/Home/SearchBar.js';
import Card from '../components/Home/Card.js'; // Card genérico para estrutura de layout básico

const Home = () => {    
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleToggleSidebar = (isOpen) => {
        setIsSidebarOpen(isOpen);
    };

    return (
        <div className="flex h-full w-full bg-[#F1F0F3]">
            <Sidebar onToggle={handleToggleSidebar} />
            
            <div className={`flex-grow flex flex-col justify-center items-center transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'ml-0'}`}>
                {/* Removemos HorizontalScroll e LineChart */}
                <div className="w-full h-auto flex flex-col justify-start items-center mt-6">
                    <SearchBar />
                </div>
            </div>
        </div>
    );
};

export default Home;
