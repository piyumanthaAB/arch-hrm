import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLogin from './pages/UserLogin';
import UserSIgnUp from './pages/UserSIgnUp';
import AdminHome from './pages/Admin/AdminHome';
import AdminUsers from './pages/Admin/AdminUsers';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<UserLogin />} />
        <Route exact path="/signup" element={<UserSIgnUp />} />
        <Route exact path="/admin/home" element={<AdminHome />} />
        <Route exact path="/admin/users" element={<AdminUsers />} />
      </Routes>
    </Router>
  );
}

export default App;
