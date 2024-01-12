import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const[isSidebarOpen,setisSidebarOpen]=useState(false);

  const openSidebar=()=>setisSidebarOpen(true);

  const closeSidebar=()=>setisSidebarOpen(false);

  return (
    <AppContext.Provider value={{
      isSidebarOpen,
      closeSidebar,
      openSidebar,
    }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };