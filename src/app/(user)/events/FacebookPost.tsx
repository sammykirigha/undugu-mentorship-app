"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FacebookPost = () => {
    interface Post {
      id: string;
      message: string;
    }
    
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
      async function fetchPosts() {
        const res = await axios.get('/api/facebook-posts');
        console.log("face book posts",res?.data);
        setPosts(res?.data);
      }
      fetchPosts();
    }, []);
    
  return (
    <div>
      <h2>Latest Facebook Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>{post.message}</p>
            <a href={`https://facebook.com/${post.id}`} target="_blank" rel="noopener noreferrer">
              View on Facebook
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FacebookPost