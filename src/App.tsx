import { JSX } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { DefaultOptions, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactQueryRewind from 'react-query-rewind';
import ruLocale from 'antd/locale/ru_RU';
import { Router as routes } from './router';
import { theme } from './theme';
import 'antd/dist/reset.css';

export const defaultOptions: DefaultOptions = {
  queries: {
    retry: false,
  },
  mutations: {
  },
};

const router = createBrowserRouter(routes);
const queryClient = new QueryClient({ defaultOptions });

function App(): JSX.Element {

  return (
      <QueryClientProvider client={queryClient}>
        <ReactQueryRewind />
        <ConfigProvider locale={ruLocale} theme={theme}>
            <RouterProvider router={router}/>
        </ConfigProvider>
      </QueryClientProvider>
  );
}

export default App;
