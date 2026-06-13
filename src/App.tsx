<<<<<<< HEAD
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
=======
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

export default App
>>>>>>> upstream/feature/NewLanding
