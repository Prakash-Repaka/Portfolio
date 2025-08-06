import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Navbar from "./components/Navbar";
import './App.css';
import 'animate.css/animate.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";
import CyberpunkLayout from "./components/CyberpunkLayout";
import WaveDivider from "./components/WaveDivider";

const Body = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  background: ${({ theme }) => theme.background1};
  color: ${({ theme }) => theme.text1};
  z-index: 0;
`

const Wrapper = styled.div`
  background: transparent;
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Navbar />
        <Body>
          <HeroSection />
          <WaveDivider />
          <About />
          <WaveDivider flip />
          <CyberpunkLayout>
            <Wrapper>
              <Skills />
              <Experience />
            </Wrapper>
            <WaveDivider />
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            <WaveDivider flip />
            <Wrapper>
              <Education />
              <Contact />
            </Wrapper>
          </CyberpunkLayout>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
