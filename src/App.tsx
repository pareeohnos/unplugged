import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import theme from './styles/theme.tsx'
import React from 'react'
import Home from './pages/Home/Home.tsx'
import Pledge from './pages/Pledge/Pledge.tsx'
import Resources from './pages/Resources.tsx'
import Research from './pages/Research.tsx'
import Ambassadors from './pages/Ambassadors.jsx'
import FAQs from './pages/FAQs.tsx'
import Government from './pages/Government.tsx'
import Communities from './pages/Communities.tsx'
import Privacy from './pages/Privacy.tsx'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pledge" element={<Pledge />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/ambassadors" element={<Ambassadors />} />
                    <Route path="/faqs" element={<FAQs />} />
                    <Route path="/government" element={<Government />} />
                    <Route path="/communities" element={<Communities />} />
                    <Route path="/privacy-policy" element={<Privacy />} />
                </Routes>
            </HashRouter>
        </ThemeProvider>
    )
}

export default App
