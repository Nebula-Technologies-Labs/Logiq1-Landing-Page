import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Announcement from "./components/Announcement";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col items-center min-w-screen">
        <div className="px-12 w-full ">
          <Header />
          <Announcement />
          <Routes>
            <Route path="/" Component={HomePage} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
