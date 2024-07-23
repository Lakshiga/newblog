import React from 'react';

const BlogNav = () => {
  return (
    <nav style={{ backgroundColor: 'navy', padding: '1rem' }}>
      <h1 style={{ color: 'white', display: 'inline-block', marginRight: '1rem' }}>Blog platform</h1>
      <input type="text" placeholder="Search" style={{ float: 'right', marginTop: '10px' }} />
      <ul style={{ display: 'flex', listStyle: 'none', color: 'white', marginTop: '10px' }}>
        <li style={{ margin: '0 1rem' }}>JavaScript</li>
        <li style={{ margin: '0 1rem' }}>Data Structure</li>
        <li style={{ margin: '0 1rem' }}>Algorithm</li>
        <li style={{ margin: '0 1rem' }}>Computer Network</li>
      </ul>
    </nav>
  );
};

export default BlogNav;
