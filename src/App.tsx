import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Documentation from './pages/Documentation';
import ApiReference from './pages/ApiReference';
import ResearchPaper from './pages/ResearchPaper';
import Layout from './components/layout/Layout';
import ModelProvider from './context/ModelContext';

const App: React.FC = () => {
  return (
    <ModelProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/api-reference" element={<ApiReference />} />
          <Route path="/research-paper" element={<ResearchPaper />} />
        </Routes>
      </Layout>
    </ModelProvider>
  );
};

export default App