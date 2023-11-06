import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Quiz from './pages/Quiz/Quiz.jsx'



const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='quiz/new' element={<Quiz/>}/>
      </Routes>

    </Router>
    </>
  )
}

export default App