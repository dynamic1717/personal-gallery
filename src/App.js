import React from 'react'
import { useSelector } from 'react-redux'
import Footer from './components/Footer'
import Header from './components/Header'
import AuthPage from './components/AuthPage'
import MainPage from './components/MainPage'

function App() {
  const { isLogged } = useSelector((state) => state.user)

  return (
    <>
      <Header />
      {!isLogged ? <AuthPage /> : <MainPage />}
      <Footer />
    </>
  )
}

export default App
