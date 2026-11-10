import { Route , Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import ContactUs from "./pages/ContactUs/ContactUs"
import Developers from "./pages/Developers/Developers"
import DeveloperProjects from "./pages/Developers/DeveloperProjects"
import Units from "./pages/Units/Units"
import UnitsDetails from "./pages/Units/UnitsDetails"
import Home from "./pages/Home/home"
import Zones from "./pages/Zones/Zones"
import ZoneProjects from "./pages/Zones/ZoneProjects"
import ProjectDetails from "./pages/Zones/ZoneProjectsDetails"
import DeveloperProjectDetails from "./pages/Developers/DeveloperProjectDetails";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/Units' element={<Units />}/>
          <Route path="/Units/:id" element={<UnitsDetails />} />
          <Route path='/Zones' element={<Zones />}/>
          <Route path="/zones/:id/projects" element={<ZoneProjects />}/>
          <Route path="/projects/:id" element={<ProjectDetails />}/>
          <Route path='/Developers' element={<Developers />}/>
          <Route path="/developers/:id/projects"element={<DeveloperProjects />}/>
          <Route path="/developers/:id/projects/:projectId" element={<DeveloperProjectDetails />}/>
          <Route path='/ContactUs' element={<ContactUs />}/>
        </Route>
      </Routes>
      </>
  )
}

export default App