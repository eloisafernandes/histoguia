import React, { useState } from "react";
import Sidebar from "../components/Menu.js";
import  Card  from "../components/Home/Card.js";
/*import LineChart from "../components/Home/LineChart.js";*/

function Estatistic() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleToggleSidebar = (isOpen) => {
        setIsSidebarOpen(isOpen);
    };

    return (
        <div className="flex h-full w-full  bg-[#F1F0F3]">
            <Sidebar onToggle={handleToggleSidebar} />

            <div
                className={`flex-grow flex flex-col justaszify-center items-center transition-all duration-300 ${isSidebarOpen ? "md:ml-64" : "ml-0"
                    }`}
            >
                <div className="w-full h-auto flex flex-col justify-start items-center mt-6">
                    <div className="flex justify-between items-center hidden md:flex mt-12 w-11/12 text-white ">
                        <Card />
                        <LineChart />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Estatistic;
