import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary  ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
