import { SignedIn, SignedOut, useUser } from '@clerk/clerk-react';
import Landing from './pages/LandingPage.tsx';
import Layout from './components/layout/Layout.tsx';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import ErrorPage from './ErrorPage.tsx';
import Home from './pages/workspace/Home/Home.tsx';
import AIChat from './pages/workspace/AIChat/AIChat.tsx';
import Document from './pages/workspace/Document/Document.tsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Navigate to="home" replace />,
        },
        {
          path: 'home',
          element: (
            <Home
              user={{
                imageUrl: useUser().user?.imageUrl || '',
                name: useUser().user?.firstName || '',
              }}
            />
          ),
          errorElement: <ErrorPage />,
        },
        {
          path: 'chat',
          element: <AIChat />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/:id',
          element: <Document />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <SignedOut>
        <Landing />
      </SignedOut>
      <SignedIn>
        <RouterProvider router={router} />
      </SignedIn>
    </>
  );
}
//
export default App;
