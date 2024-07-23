import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../components/images/javascript.jpeg';
import image2 from '../components/images/data structure.jpg';

// import Post4 from "/home/ukistu19/Documents/blog/src/components/Post4.js";



const Posts = () => {
  return (
    <div style={{ display: 'flex', padding: '1rem' }}>
      <div style={{ flex: '2', marginRight: '2rem' }}>
        <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ddd' }}>
          <img src={image1} alt="JavaScript" style={{ width: '100%' }} />
          <h2>JavaScript</h2>
          <p>JavaScript is the world's most popular lightweight, interpreted compiled programming language....</p>
          <Link to="/post1">Read More</Link>
        </div>
        <div style={{ padding: '2rem', border: '1px solid #ddd' }}>
          <img src={image2} alt="Data Structure" style={{ width: '100%' }} />
          <h2>Data Structure</h2>
          <p>The word algorithm means "a process or set of rules to be followed in calculations or other problem-solving operations"...</p>
          <Link to="/post2">Read More</Link>
        </div>
      </div>
      <div style={{ padding: '1rem', border: '1px solid #ddd' }}>
          <img src={image2} alt="Algorithm" style={{ width: '100%' }} />
          <h2>Algorithm</h2>
          <p>An algorithm is a set of well-defined instructions or rules designed to solve a specific problem or perform a particular task.....</p>
          <Link to="/post2">Read More</Link>
        </div>
        <div style={{ padding: '1rem', border: '1px solid #ddd' }}>
          <img src={image2} alt="Computer Network" style={{ width: '100%' }} />
          <h2>Computer Network</h2>
          <p>Computer networks refer to a collection of interconnected computing devices that communicate with each other to share resources and exchange data.....</p>
          <Link to="/post2">Read More</Link>
        </div>
      <div style={{ flex: '1', border: '1px solid #ddd', padding: '1rem', height: 'fit-content' }}>
        <h3>Recent Posts</h3>
        <ul>
          <li><Link to="/post1">JavaScript</Link></li>
          <li><Link to="/post2">Data Structure</Link></li>
          <li><Link to="/post3">Algorithm</Link></li>
          <li><Link to="/Post4">Computer Network</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Posts;
