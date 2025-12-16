import './App.css'
import { Biohazard } from 'lucide-react'
import { Navbar } from './components/Navbar'
import { Feed } from './components/Feed'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const Layout = () => (
  <div className="flex">
    <Navbar />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Feed sortBy="home" /> },
      { path: "/explore", element: <Biohazard /> },
      { path: "/hidden", element: <Feed sortBy="hidden" /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App
