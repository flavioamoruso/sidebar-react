import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const[isSidebarOpen,setisSidebarOpen]=useState(false);

  const[isModalOpen,setIsModalOpen]=useState(false);

  const openSidebar=()=>setisSidebarOpen(true);

  const closeSidebar=()=>setisSidebarOpen(false);

  const openModal=()=>setIsModalOpen(true)

  const closeModal=()=>setIsModalOpen(false)

  return (
    <AppContext.Provider value={{
      isSidebarOpen,
      isModalOpen,
      closeSidebar,
      openSidebar,
      openModal,
      closeModal,

    }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };