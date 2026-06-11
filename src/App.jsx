import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SimulatorProvider } from './context/SimulatorContext';
import MainLayout from './layout/MainLayout';
import SimulatorPage from './pages/SimulatorPage';
import DocumentationPage from './pages/DocumentationPage';
import AlgorithmsPage from './pages/AlgorithmsPage';

export default function App() {
  return (
    <SimulatorProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<SimulatorPage />} />
            <Route path="/docs" element={<DocumentationPage />} />
            <Route path="/algorithms" element={<AlgorithmsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </SimulatorProvider>
  );
}
