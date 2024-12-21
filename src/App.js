import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from './component/Dashboard';
import Login from './component/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard title="Home Page" />} />
        <Route path='/login' element={<Login title="Login" />} />
      </Routes>
    </Router>
  );
}

export default App;