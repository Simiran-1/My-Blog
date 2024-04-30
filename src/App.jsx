import React from 'react'

import { Routes,Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Blog from './Component/Blog';
import Contact from './Component/Contact';
import Header from './Component/Header';
import CreateBlog from './Component/CreateBlog';
 const App = () => {
  return (
   <>
<Header/>
<Routes>
  <Route  path='/home' element={<Home />}  />
  <Route  path='/about' element={<About />}  />
  <Route  path='/Contact' element={<Contact />}  />
  <Route  path='/Blog' element={<Blog />}  />
  <Route  path='/create-blog' element={<CreateBlog />}  />
</Routes>

   
   
   </>
  )
}
export default App;