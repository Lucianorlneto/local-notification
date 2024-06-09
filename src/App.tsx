import { ToastContainer } from "react-toastify";
import "./App.css";
import { Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App h-[100%]">
      <Header />
      <div className="p-16">
        <Outlet />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
