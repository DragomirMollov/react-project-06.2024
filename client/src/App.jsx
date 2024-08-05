import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import Sidenav from './components/Sidenav';
import Work from './components/Work';
import Projects from './components/projects/Projects';
import Contact from './components/Contact';
import Header from './components/header/Header';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';

function App() {
  return (
    <AuthContextProvider>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Sidenav />} />
            <Route path="/work" element={<Work />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </AuthContextProvider>
  );
}

export default App;
