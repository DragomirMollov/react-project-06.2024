import { Routes, Route } from "react-router-dom";

import { AuthContextProvider } from "./contexts/AuthContext";

import Sidenav from './components/Sidenav';
import Main from './components/Main';
import Work from './components/Work';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from "./components/header/Header";

function App() {

  return (
    <AuthContextProvider>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Sidenav />} />
            <Route path="/main" element={<Main />} />
            <Route path="/work" element={<Work />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </AuthContextProvider>
  )
}

export default App
