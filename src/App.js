import { Routes, Route, Link } from 'react-router-dom';
import Greeting from './Greeting';
import Home from './Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/greeting">greeting</Link>
        <Link to="/">home</Link>
      </nav>
      <Routes>
        <Route path="/greeting" element={<Greeting />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
