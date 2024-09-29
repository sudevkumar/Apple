import Chips from "./components/Chips";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HighLights from "./components/HighLights";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <main className=" bg-black">
        <Navbar />
        <Hero />
        <HighLights />
        <Modal />
        <Feature />
        <Chips />
        <Footer />
      </main>
    </>
  );
}

export default App;
