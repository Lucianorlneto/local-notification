import { ToastContainer } from "react-toastify";
import "./App.css";
import { Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App flex h-screen flex-col">
      <Header />

      <Outlet />

      <ToastContainer />
    </div>
  );
}

export default App;
