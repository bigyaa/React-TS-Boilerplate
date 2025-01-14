import './App.css'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/dashboard" element={<div>Dashboard</div>} />
    </Routes>
  );
}

export default App;