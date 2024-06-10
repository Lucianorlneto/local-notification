import { ToastContainer } from "react-toastify";
import "./App.css";
import { Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App flex h-screen flex-col">
      <header>
        <Header />
      </header>

      <Outlet />

      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default App;
