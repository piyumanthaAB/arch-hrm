import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLogin from './pages/UserLogin';
import UserSIgnUp from './pages/UserSIgnUp';
import AdminHome from './pages/Admin/AdminHome';
import AdminUsers from './pages/Admin/AdminUsers';
import UserProfile from './pages/UserProfile';
import { Toaster } from 'react-hot-toast';
import AuthState from './context/auth/AuthState';
import AdminAddUser from './pages/Admin/AdminAddUser';
import AdminViewAllUsers from './pages/Admin/AdminViewAllUsers';

function App() {
  return (
    <AuthState>
      <Router>
        <Toaster
          containerStyle={{
            position: 'fixed',
            zIndex: '99999999999999999999999999999999999',
            width: 'maxContent',
          }}
          toastOptions={{
            className: '',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
              fontSize: '1.5rem',
              position: 'sticky',
              textAlign: 'center',

              zIndex: '99999999999999999999999999999999999',
            },
          }}
        />

        <Routes>
          <Route exact path="/" element={<UserLogin />} />
          <Route exact path="/signup" element={<UserSIgnUp />} />
          <Route exact path="/user/home" element={<AdminHome />} />
          <Route exact path="/user/my-profile" element={<AdminHome />} />
          {/* =========================================================== */}
          <Route exact path="/admin/home" element={<AdminHome />} />
          <Route exact path="/admin/my-profile" element={<UserProfile />} />
          <Route
            exact
            path="/admin/users/users"
            element={<AdminViewAllUsers />}
          />
          <Route
            exact
            path="/admin/users/add-user"
            element={<AdminAddUser />}
          />
          <Route
            exact
            path="/admin/users/view-users"
            element={<AdminViewAllUsers />}
          />
          <Route
            exact
            path="/admin/users/view-user/user_id"
            element={<AdminUsers />}
          />
        </Routes>
      </Router>
    </AuthState>
  );
}

export default App;
