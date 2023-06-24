import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Textform from './components/Textform/Textform.js'
import Textform2 from './components/Textform2/Textform2.js'

function App() {
  return (
    <BrowserRouter>
      <RouterContent />
    </BrowserRouter>
  )
}

function RouterContent() {
  const location = useLocation()
  const path = location.pathname

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Navbar
              title="CONVERT CASE"
              home="home"
              // features="Our Product"
              prices="premium tools"
            />
          }
        />
        <Route
          path="/case"
          element={
            <Navbar
              title="CONVERT CASE"
              home="home"
              // features="Our Product"
              prices="premium tools"
            />
          }
        />
        <Route
          path="/moretools"
          element={
            <Navbar
              title="MORE TOOLS"
              home="home"
              // features="Our Product"
              prices="premium tools"
            />
          }
        />
      </Routes>
      {path === '/case' ? (
        <div className="container">
          <Textform heading="enter your text" />
        </div>
      ) : (
        <div className="container">
          <Textform2 heading="enter your text" />
        </div>
      )}
    </>
  )
}

export default App
