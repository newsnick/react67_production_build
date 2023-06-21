import './App.css'
import Navbar from './components/Navbar/Navbar'
import Textform from './components/Textform/Textform.js'

function App() {
  return (
    <div className="container">
      <Navbar
        title="MyNavibar"
        home="home"
        // features="Our Product"
        prices="price list"
      />
      <Textform heading="text area" />
    </div>
  )
}

export default App
