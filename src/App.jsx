import "./App.css";
import { useState } from "react";
import Banner from "./Components/Banner";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";
import SNav from "./Components/SNav";
import { Route, Routes } from "react-router-dom";

function App() {
  const [ShowRes, setShowRes] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Banner darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero ShowRes={ShowRes} darkMode={darkMode} />
      <About ShowRes={ShowRes} darkMode={darkMode} />
      <Skills ShowRes={ShowRes} darkMode={darkMode} />
      <Contact ShowRes={ShowRes} darkMode={darkMode} />
      <Routes>
        <Route
          path="/Resume"
          element={
            <Resume
              ShowRes={ShowRes}
              setShowRes={setShowRes}
              darkMode={darkMode}
            />
          }
        />
      </Routes>
      <SNav ShowRes={ShowRes} setShowRes={setShowRes} darkMode={darkMode} />
      {/**/}
    </>
  );
}

export default App;
