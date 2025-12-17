import { Navbar } from './components/Navbar'
import { Feed } from './components/Feed'
import { About } from './components/About'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Settings } from './components/Settings'

const Layout = () => (
    <>
      <Navbar />
      <Outlet />
    </>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Feed sortBy="default" /> },
      { path: "/settings", element: <Settings /> },
      { path: "/hidden", element: <Feed sortBy="hidden" /> },
      { path: "/about", element: <About />},
      { path: `/user/:userId`, element: <Feed sortBy='user' />},
      { path: `/length`, element: <Feed sortBy='length' />},
      { path: `/danger`, element: <Feed sortBy='danger' />}
    ],
  },
], {basename: "/hazard/" });
function App() {
  return (
    <div className="flex">
      <RouterProvider router={router} />
    </div>
  );
}

export default App
