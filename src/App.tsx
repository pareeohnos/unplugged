import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import theme from './styles/theme.tsx'
import React from 'react'
import Home from './pages/Home/Home.tsx'
import Pledge from './pages/Pledge/Pledge.tsx'
import About from './pages/About.jsx'
import Research from './pages/Research.jsx'
import Ambassadors from './pages/Ambassadors.jsx'
import FAQs from './pages/FAQs.jsx'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pledge" element={<Pledge />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/ambassadors" element={<Ambassadors />} />
                    <Route path="/faqs" element={<FAQs />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
