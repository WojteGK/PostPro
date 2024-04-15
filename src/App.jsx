import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PostSection from './components/PostSection/PostSection'

function App() {
  const [postCount, setPostCount] = useState(10); // domyślna wartość

  return (
    <>
      <Navbar></Navbar>
      <PostSection postCount={postCount}/>
    </>
  )
}

export default App
