import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLogin from './pages/UserLogin';
import UserSIgnUp from './pages/UserSIgnUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<UserLogin />} />
        <Route exact path="/signup" element={<UserSIgnUp />} />
      </Routes>
    </Router>
  );
}

export default App;
