import axe from '@axe-core/react';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );

  if (import.meta.env.DEV) {
    void axe(React, root, 1000);
  }
}
