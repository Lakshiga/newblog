import React from 'react';
import { Link } from 'react-router-dom';
// import Post1 from '../components/Post1';
// import Post2 from './components/Post2';
// import Post3 from './components/Post3';
// import Post4 from "./components/Post4";

const BlogNav = () => {
  return (
    <nav style={{ backgroundColor: 'navy', padding: '1rem' }}>
      <h1 style={{ color: 'white', display: 'inline-block', marginRight: '1rem' }}>Blog platform</h1>
      <input type="text" placeholder="Search" style={{ float: 'right', marginTop: '15px' }} />
      <ul style={{ display: 'flex', listStyle: 'none', color: 'white', marginTop: '1px' }}>
        <li style={{ margin: '0 1rem' }}><Link to="/newblog/Post1">JavaScript</Link></li>
        <li style={{ margin: '0 1rem' }}><Link to="/newblog/Post2">Data Structure</Link></li>
        <li style={{ margin: '0 1rem' }}><Link to="/newblog/Post3">Algorithm</Link></li>
        <li style={{ margin: '0 1rem' }}><Link to="/newblog/Post4">Computer Network</Link></li>
      </ul>
    </nav>
  );
};

export default BlogNav;
         