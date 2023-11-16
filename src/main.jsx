import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './routers/AppRouter';
import { store } from "./store/store";
import { Provider } from "react-redux";
import '../normalize-fwd.css';
import './index.css'

// TanQuery Components
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// Add HelmetProvider here
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AppRouter />
        <ReactQueryDevtools initialIsOpen={false} />
      </Provider>
    </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);