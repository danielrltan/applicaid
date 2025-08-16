import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import SelectUniversityProgramsPage from './pages/SelectUniversityProgramsPage'
import ViewSelectedUniversitiesPage from './pages/ViewSelectedUniversitiesPage'
import GradesRequirementsTrackerPage from './pages/GradesRequirementsTrackerPage'
import CompareUniversitiesProgramsPage from './pages/CompareUniversitiesProgramsPage'
import EssayAssistancePage from './pages/EssayAssistancePage'
import PersonalityInterestsProfilePage from './pages/PersonalityInterestsProfilePage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/select-university-programs" element={<SelectUniversityProgramsPage />} />
      <Route path="/view-selected-universities" element={<ViewSelectedUniversitiesPage />} />
      <Route path="/grades-requirements-tracker" element={<GradesRequirementsTrackerPage />} />
      <Route path="/compare-universities-programs" element={<CompareUniversitiesProgramsPage />} />
      <Route path="/essay-assistance" element={<EssayAssistancePage />} />
      <Route path="/personality-interests-profile" element={<PersonalityInterestsProfilePage />} />
    </Routes>
  )
} 