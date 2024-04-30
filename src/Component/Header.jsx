import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div  className='my-5 gap-6 text-red
     flex max-w-screen-xl mx-auto'> 
    <Link to="/home">Home</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/about">About</Link>
    <Link to="/create-blog">CreateBlog</Link>
    </div>
  )
}
export default Header;