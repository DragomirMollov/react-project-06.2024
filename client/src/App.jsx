import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';

import Sidenav from './components/Sidenav';
import Projects from './components/projects/Projects';
import Contact from './components/Contact';
import Header from './components/header/Header';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Logout from './components/logout/Logout';
import ProjectDetails from './components/project-details/ProjectDetails';
import ProjectCreate from './components/project-create/ProjectCreate';
import ProjectEdit from './components/project-edit/ProjectEdit';
import Work from './components/work/Work';
import RouteGuard from './components/common/RouteGuard';
import PrivetGuard from './components/common/PrivateGuard';

function App() {
  return (
    <AuthContextProvider>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Sidenav />} />
            <Route path="/work" element={<Work />} />
            <Route path="/register" element={<RouteGuard><Register /></RouteGuard>} />
            <Route path="/login" element={<Login />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route element={<PrivetGuard />}>
                <Route path='/projects/create' element={<ProjectCreate />} />
                <Route path="/projects/:projectId/details" element={<ProjectDetails />} />
                <Route path="/logout" element={<Logout />} />
            </Route>  
            <Route path="/projects/create" element={<RouteGuard><ProjectCreate /></RouteGuard>} />
            {/* <Route path="/projects/create" element={(
                    <RouteGuard>
                        <ProjectCreate />
                    </RouteGuard>
            )} /> */}
            <Route path="/projects/:projectId/edit" element={<ProjectEdit />} />
          </Routes>
        </main>
      </div>
    </AuthContextProvider>
  );
}

export default App;
