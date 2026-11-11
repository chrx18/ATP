import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Singles from './pages/Singles';
import Doubles from './pages/Doubles';
import RootLayout from './components/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Singles />,
      },
      {
        path: '/doubles',
        element: <Doubles />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;