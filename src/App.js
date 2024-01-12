import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Modal from "./Modal";
import { useGlobalContext } from "./context";

function App() {
  const { isModalOpen, openModal } = useGlobalContext();

  return (
    <>
      <Navbar />
      <Sidebar />
      <Modal />
    </>
  );
}

export default App;