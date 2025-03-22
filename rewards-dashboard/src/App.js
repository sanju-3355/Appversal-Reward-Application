import React from 'react';
import { useContext } from 'react';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './features/auth/Login';
import RewardsList from './features/rewards/RewardsList';
import Cart from './features/rewards/Cart';
import AdminDashboard from './features/admin/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import LogoutButton from './features/auth/LogoutButton';
import Notifications from './features/notifications/Notifications';

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Toggle Dark Mode</button>;
};


function App() {
  return (
    <ThemeProvider>
    <Router>
      <nav>
        <a href="/">Rewards</a>
        <a href="/cart">Cart</a>
        <a href="/admin">Admin</a>
        <ThemeToggle />
        <LogoutButton />
      </nav>
      <Notifications />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<RewardsList />} />
        <Route path="/cart" element={<Cart />} />
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
