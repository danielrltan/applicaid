import React, { useState, useRef } from 'react'
import axios from 'axios'
import LoginPage from './LoginPage'
import SignUpPage from './SignUpPage'
import ForgotPasswordPage from './ForgotPasswordPage'
import MainDashboard from './MainDashboard'
import SelectUniversityProgramsPage from './SelectUniversityProgramsPage'
import ViewYourListPage from './ViewYourListPage'
import GradesRequirementsTrackerPage from './GradesRequirementsTrackerPage'
import CompareUniversitiesPage from './CompareUniversitiesPage'
import EssayAssistancePage from './EssayAssistancePage'
import PersonalityInterestsPage from './PersonalityInterestsPage'

export default function App() {
  const [currentPage, setCurrentPage] = useState('login') // 'login', 'signup', 'forgotPassword', 'main', 'selectUniversityPrograms', 'viewYourList', 'gradesTracker', 'compareUniversities', 'essayAssistance', or 'personalityInterests'
  const [userName, setUserName] = useState('')
  const [selectedUniversities, setSelectedUniversities] = useState([])
  const [selectedPrograms, setSelectedPrograms] = useState([])

  const handleLogin = (credentials) => {
    // Simple login logic - you can enhance this later
    if (credentials.username && credentials.password) {
      setUserName(credentials.username || 'User')
      setCurrentPage('main')
    }
  }

  const handleSignUp = (formData) => {
    // Handle sign up logic here
    console.log('Sign up data:', formData)
    // For now, just go back to login
    setCurrentPage('login')
  }

  const handleForgotPassword = (email) => {
    // Handle forgot password logic here
    console.log('Forgot password email:', email)
    // For now, just go back to login
    setCurrentPage('login')
  }

  const handleSignOut = () => {
    setCurrentPage('login')
    setUserName('')
  }

  const goToSignUp = () => {
    setCurrentPage('signup')
  }

  const goToLogin = () => {
    setCurrentPage('login')
  }

  const goToForgotPassword = () => {
    setCurrentPage('forgotPassword')
  }

  const goToSelectUniversityPrograms = () => {
    setCurrentPage('selectUniversityPrograms')
  }

  const goToDashboard = () => {
    setCurrentPage('main')
  }

  const goToViewYourList = () => {
    setCurrentPage('viewYourList')
  }

  const goToGradesTracker = () => {
    setCurrentPage('gradesTracker')
  }

  const goToCompareUniversities = () => {
    setCurrentPage('compareUniversities')
  }

  const goToEssayAssistance = () => {
    setCurrentPage('essayAssistance')
  }

  const goToPersonalityInterests = () => {
    setCurrentPage('personalityInterests')
  }

  // Show appropriate page based on currentPage state
  if (currentPage === 'login') {
    return <LoginPage onLogin={handleLogin} onSignUp={goToSignUp} onForgotPassword={goToForgotPassword} />
  }

  if (currentPage === 'signup') {
    return <SignUpPage onSignUp={handleSignUp} onBackToLogin={goToLogin} />
  }

  if (currentPage === 'forgotPassword') {
    return <ForgotPasswordPage onBackToLogin={goToLogin} onSubmitEmail={handleForgotPassword} />
  }

  // Show main dashboard if logged in
  if (currentPage === 'main') {
    return <MainDashboard onSignOut={handleSignOut} userName={userName} onNavigateToSelectUniversity={goToSelectUniversityPrograms} onNavigateToGradesTracker={goToGradesTracker} onNavigateToCompareUniversities={goToCompareUniversities} onNavigateToEssayAssistance={goToEssayAssistance} onNavigateToPersonalityInterests={goToPersonalityInterests} />
  }

  if (currentPage === 'selectUniversityPrograms') {
    return <SelectUniversityProgramsPage onBackToDashboard={goToDashboard} onViewList={goToViewYourList} />
  }

  if (currentPage === 'viewYourList') {
    return <ViewYourListPage onBackToSelectUniversity={goToSelectUniversityPrograms} onNavigateToAddUniversities={goToSelectUniversityPrograms} selectedUniversities={selectedUniversities} selectedPrograms={selectedPrograms} />
  }

  if (currentPage === 'gradesTracker') {
    return <GradesRequirementsTrackerPage onBackToDashboard={goToDashboard} />
  }

  if (currentPage === 'compareUniversities') {
    return <CompareUniversitiesPage onBackToDashboard={goToDashboard} />
  }

  if (currentPage === 'essayAssistance') {
    return <EssayAssistancePage onBackToDashboard={goToDashboard} />
  }

  if (currentPage === 'personalityInterests') {
    return <PersonalityInterestsPage onBackToDashboard={goToDashboard} />
  }

  // Fallback to login
  return <LoginPage onLogin={handleLogin} onSignUp={goToSignUp} onForgotPassword={goToForgotPassword} />
} 