import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SiteContext, { SiteDataContext } from './Contexts/SiteContext.jsx'
import BlogContext from './Contexts/BlogContext.jsx'
import ProjectContext from './Contexts/ProjectContext.jsx'
import ServicesContext from './Contexts/ServicesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SiteContext>
      <ProjectContext>
        <BlogContext>
          <ServicesContext>
            <App />
          </ServicesContext>
        </BlogContext>
      </ProjectContext>
    </SiteContext>
  </StrictMode>,
)
