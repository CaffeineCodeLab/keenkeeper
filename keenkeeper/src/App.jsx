import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TimelineProvider } from "./context/TimelineContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <TimelineProvider>
      <BrowserRouter>
        <Navbar />
        <Footer />
      </BrowserRouter>
    </TimelineProvider>
  );
}

export default App;