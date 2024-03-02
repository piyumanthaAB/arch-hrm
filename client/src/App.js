import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLogin from './pages/UserLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<UserLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
