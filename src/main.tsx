import { MantineProvider } from '@mantine/core';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import { queryClient } from './lib/tanstack-query.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
