import { useState } from 'react'
import { Route,Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from './pages/Home';
import Editpage from './pages/Edit';

function App() {
 

  return (
    <div className='container'>
      <h1>Memes</h1>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path ='/edit' element={<Editpage />} />
      </Routes>
    </div>
  )
}

export default App
