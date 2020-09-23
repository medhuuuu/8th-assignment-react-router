import React, { useEffect, useState } from 'react';
import MainBar from '../MainBar/MainBar';
import Post from '../Post/Post';

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, []);
  return (
    <div>
      <MainBar></MainBar>
      <p>
        {
          posts.map(post => <Post post={post}></Post>)
        }
      </p>
    </div>
  );
};

export default Home;    