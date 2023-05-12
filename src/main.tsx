import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Notifications position="top-right" />
      <App />
    </MantineProvider>
  </BrowserRouter>
);
