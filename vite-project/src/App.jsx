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
      <button className='get-posts-btn' onClick={handleButtonClick}>Click to fetch posts by click</button>
      {posts.length && <PostListAfetrClick posts={posts} />}
    </>
  )
}

export default App
