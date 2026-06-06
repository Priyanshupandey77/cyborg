import Navbar from "./components/Navbar";
import Contact from "./sections/Contact";
import Feature from "./sections/Features";
import Hero from "./sections/Hero";
import Timeline from "./sections/Timeline";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature/>
      <Timeline/>
      <Contact/>
    </>
  );
}

export default App;
