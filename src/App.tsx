import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import WelcomePage from './pages/Welcome.tsx';
import ChallengesPage from './pages/Challenges.tsx';

const router = createBrowserRouter([
  { path: '/', element: <WelcomePage /> },
  { path: '/challenges', element: <ChallengesPage /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
