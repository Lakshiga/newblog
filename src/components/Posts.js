import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../components/images/javascript.jpeg';
import image2 from '../components/images/data structure.jpg';
import image3 from '../components/images/Algorithm.png';
import image4 from '../components/images/computer network.png';

const Posts = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%', marginBottom: '2rem' }}>
        <div style={{ flex: '1', marginRight: '2rem', border: '1px solid #ddd', padding: '1rem' }}>
          <img src={image1} alt="JavaScript" style={{ width: '100%' }} />
          <h2>JavaScript</h2>
          <p>JavaScript is the world's most popular lightweight, interpreted compiled programming language......</p>
          <Link to="/post1">Read More</Link>
        </div>
        <div style={{ flex: '1', border: '1px solid #ddd', padding: '1rem' }}>
          <img src={image2} alt="Data Structure" style={{ width: '100%' }} />
          <h2>Data Structure</h2>
          <p>The word algorithm means "a process or set of rules to be followed in calculations or other problem-solving operations".......</p>
          <Link to="/post2">Read More</Link>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%', marginBottom: '2rem' }}>
        <div style={{ flex: '1', marginRight: '2rem', border: '1px solid #ddd', padding: '1rem' }}>
          <img src={image3} alt="Algorithm" style={{ width: '100%' }} />
          <h2>Algorithm</h2>
          <p>An algorithm is a set of well-defined instructions or rules designed to solve a specific problem or perform a particular task.....</p>
          <Link to="/post3">Read More</Link>
        </div>
        <div style={{ flex: '1', border: '1px solid #ddd', padding: '1rem' }}>
          <img src={image4} alt="Computer Network" style={{ width: '100%' }} />
          <h2>Computer Network</h2>
          <p>Computer networks refer to a collection of interconnected computing devices that communicate with each other to share resources and exchange data.....</p>
          <Link to="/post4">Read More</Link>
        </div>
      </div>
      <div style={{ width: '80%', border: '1px solid #ddd', padding: '1rem' }}>
        <h3>Recent Posts</h3>
        <ul>
          <li><Link to="/Post1">JavaScript</Link></li>
          <li><Link to="/Post2">Data Structure</Link></li>
          <li><Link to="/Post3">Algorithm</Link></li>
          <li><Link to="/Post4">Computer Network</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Posts;
