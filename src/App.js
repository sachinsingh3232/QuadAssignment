import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Summary from './Pages/Summary/Summary';
import Book from './Pages/Book/Book';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </Router>
    </div >

  );
}

export default App;
