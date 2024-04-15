import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PostSection from './components/PostSection/PostSection'

function App() {
  const [postCount, setPostCount] = useState(10); // domyślna wartość

  return (
    <div className='App'>
      <Navbar></Navbar>
      <PostSection postCount={postCount}/>
    </div>
  )
}

export default App
