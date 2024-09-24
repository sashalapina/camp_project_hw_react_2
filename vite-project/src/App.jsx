import { useEffect, useState } from 'react'
import { PostListAfetrClick } from './components/PostList'
import './App.css'
import './Posts.css'

function App() {
  const [posts, setPosts] = useState([])

  const fetchPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((responseJson) => setPosts(responseJson))
  }

  useEffect(() => {
    fetchPosts()
  },[])

  function handleButtonClick() {
    fetchPosts()
  }

  return (
    <>
    {posts.length ? (<PostListAfetrClick posts={posts} />) : (<button className='get-posts-btn' onClick={handleButtonClick}>Click to get posts</button>)}
    </>
  )
}

export default App
