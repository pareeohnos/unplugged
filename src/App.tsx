import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import theme from './styles/theme.tsx'
import React from 'react'
import Home from './pages/Home/Home.tsx'
import Pledge from './pages/Pledge/Pledge.tsx'
import Resources from './pages/Resources.jsx'
import Research from './pages/Research.jsx'
import Ambassadors from './pages/Ambassadors.jsx'
import FAQs from './pages/FAQs.jsx'
import Government from './pages/Government.jsx'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pledge" element={<Pledge />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/ambassadors" element={<Ambassadors />} />
                    <Route path="/faqs" element={<FAQs />} />
                    <Route path="/government" element={<Government />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
