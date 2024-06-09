import { ToastContainer } from "react-toastify";
import "./App.css";
import { Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App flex h-screen flex-col">
      <Header />
      <div className="flex h-full justify-center items-center p-16">
        <Outlet />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
