import { Routes, Route, Navigate } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
import { DashboardPage } from './Pages/DashboardPage';
import { ProjectPage } from './Pages/ProjectPage';
import { AIPage } from './Pages/AIPage';

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index                element={<DashboardPage />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/ai"           element={<AIPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
