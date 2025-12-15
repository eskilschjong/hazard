import './App.css'
import { Biohazard } from 'lucide-react'
import { Navbar } from './components/Navbar'
import { Feed } from './components/Feed'

function App() {

  return (
    <div className='flex'>
      <Navbar />
      {/* <div>
        <div className="flex text-3xl">
          <Biohazard className='w-12 h-12' /><h1>Welcome To Hazard</h1>
        </div>
        <div className="w-80 h-2 bg-red-500 mx-auto my-4"></div>
        
        <p>
          View all the dirty secrets of Cipher Society
        </p>
      </div> */}
      <Feed />
    </div>
  )
}

export default App
