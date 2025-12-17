import './App.css'
import { Navbar } from './components/Navbar'
import { Feed } from './components/Feed'
import { About } from './components/About'
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
      { path: "/", element: <Feed sortBy="default" /> },
      { path: "/hidden", element: <Feed sortBy="hidden" /> },
      { path: "/about", element: <About />},
      { path: `/user/:userId`, element: <Feed sortBy='user' />},
      { path: `/length`, element: <Feed sortBy='length' />},
      { path: `/danger`, element: <Feed sortBy='danger' />}
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App
