import React from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Worksample from './pages/Wroksample'
import Contact from './pages/Contact'
import  MainRoutes  from './routes/MainRoutes';

const App = () => {
  return (
    <div className='relative'> 
      <div className='sticky top-0 z-50'> <Nav/></div>
<MainRoutes/>
    </div>
  )
}

export default App