import './App.css'
import { Biohazard } from 'lucide-react'
import { Navbar } from './components/Navbar'
import { Feed } from './components/Feed'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path: "/", element: <Feed />},
  { path: "/explore", element: <Biohazard />}
  
])

function App() {

  


  return (
    <div className='flex'>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
