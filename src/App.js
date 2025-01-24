import React from 'react'
import Home from '../src/Pages/Home'
import Privacypolicy from '../src/Pages/privacypolicy'
import Download from '../src/Pages/Download'
import {
BrowserRouter ,
 Routes,
 Route,
 Navigate
} from 'react-router-dom';

const  App=()=> {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' >
<Route path='home' element={<Home/>}/>
<Route path='privacypolicy' element={<Privacypolicy/>}/>
<Route path='download' element={<Download/>}/>
  </Route>
</Routes>
</BrowserRouter>
  )
}

export default App