import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import CreateUser from './pages/CreateUser.jsx';
import { ROUTES } from './theme.js';

/**
 * Public surface only. Unknown paths silently return to home — no "coming soon" copy.
 */
export default function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.CREATE_USER} element={<CreateUser />} />
      <Route path="/signup" element={<Navigate to={ROUTES.CREATE_USER} replace />} />
      <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
    </Routes>
  );
}
