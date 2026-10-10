import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const rootElement = document.getElementById('root')

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Production pages are pre-rendered to real HTML, so hydrate them.
// In `npm run dev` the root is empty, so render from scratch.
if (rootElement.firstElementChild) {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}
