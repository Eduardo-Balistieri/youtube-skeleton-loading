import React, { useState, useEffect } from 'react'
import Layout from './components/Layout'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const handleLoading = () => {
      setIsLoading(prevState => !prevState)
    }

    document.addEventListener('click', handleLoading)
    const timeoutId = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => {
      document.removeEventListener('click', handleLoading)
      clearTimeout(timeoutId)
    }
  }, [])

  return <Layout isLoading={isLoading} />
}

export default App
