import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/Register';
import { Home } from './pages/home';
import Profile from './pages/profile';

function App() {
  return (
    <Routes>
      <Route path ="/profile" element = {<Profile/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
