// Libraries
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Component
import Header from './commons/header';
import Home from './pages/home';

// Styles
import './App.css';

function App() {

  return (
    <Router>
      <div className='app d-flex flex-column min-vh-100'>
        <Header />
        <Routes>
          <Route path="/" element={
            <Home />} 
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
