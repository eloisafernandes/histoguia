import React, { useState } from "react";
import AdmSidebar from "../components/Adm/MenuAdm";
import SearchBarAluno from "../components/Adm/SearchBarAluno";

const AdmAlunos = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = (isOpen) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <div className="flex h-full w-full bg-[#F1F0F3]">
      <AdmSidebar onToggle={handleToggleSidebar} />
      <div
        className={`flex-grow transition-all duration-300 ${
          isSidebarOpen ? "md:ml-64" : "ml-0"
        }`}
      >
        <div className="flex flex-row justify-center items-center mt-12 pl-[100px] p-4 max-md:flex-col max-md:gap-6 max-md:p-0 max-md: max-md:w-[200px] max-md:pl-[120px]">
          <p className="text-[24px] font-semibold max-md:text-[20px]">Alunos</p>
        </div>

        <div className="flex flex-row justify-center items-center mt-4 max-md:w-[320px] max-md:ml-[-10px] max-md:justify-center">
          <SearchBarAluno />
        </div>
      </div>
    </div>
  );
};

export default AdmAlunos;
