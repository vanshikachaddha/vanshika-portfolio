import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About, Works, Tech, Contact, Footer, AnimatedBackground } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen relative">
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Works />
          <Tech />
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
