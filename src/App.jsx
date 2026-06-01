import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate, } from 'react-router-dom'

import { Analytics } from "@vercel/analytics/react"
import DesktopNotice from './DesktopNotice'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { AnimatePresence } from 'framer-motion'
import menuVideo from './assets/Mainn.mp4'
import main1 from './assets/main1.mp4'
import main2 from './assets/main2.mp4'
import main3 from './assets/main3.mp4'
import aizen from './assets/aizen.mp4'
import sfxvideo from './assets/SFX VIDEO.mp4'
import P3Menu from './P3Menu'
import VideoPage from './VideoPage'
import PageTransition from './PageTransition'
import UserInterface from './UserInterface'
import Animation from './Animation'
import Sfx from './Sfx'
import Vfx from './Vfx'
import './App.css'
import CombatTags from './CombatTags'

function MenuScreen() {
  const navigate = useNavigate()
  const [ready, setReady] = useState(false)

  useEffect(() => { document.title = "kahny"; }, []);

  return (
    <div id="menu-screen">
      <div className={`video-loader${ready ? " hidden" : ""}`}>
        <div className="video-loader-bar">
          <div className="video-loader-fill" />
        </div>
      </div>
      <video
        src={menuVideo}
        autoPlay loop muted playsInline
        onCanPlay={() => setReady(true)}
      />
      <P3Menu onNavigate={(page) => navigate(`/${page}`)} />
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition variant="default"><MenuScreen /></PageTransition>
        } />
        <Route path="/userinterface" element={
          <PageTransition variant="userinterface"><UserInterface /></PageTransition>
        } />
        <Route path="/animation" element={
          <PageTransition variant="animation"><Animation src={main2} /></PageTransition>
        } />
        <Route path="/vfx" element={
          <PageTransition variant="vfx"><Vfx src={main1} /></PageTransition>
        } />
        <Route path="/sfx" element={
          <PageTransition variant="sfx"><Sfx src={sfxvideo} /></PageTransition>
        } />
        <Route path="/CombatTags" element={
          <PageTransition variant="combattags"><CombatTags src={aizen} /></PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  )
}
export default function App() {
  return (
    <>
      <DesktopNotice />
      <Analytics />
      <AnimatedRoutes />
      <SpeedInsights />
    </>
  )
}