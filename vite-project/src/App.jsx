import { useEffect, useState } from 'react'
import { PostListAfetrClick } from './components/PostsList/PostList'
import { LanguageProvider } from './components/LanguageSwitcher/LanguageContext'
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher'

import './App.css'
import './components/PostsList/Posts.css'
import './components/LanguageSwitcher/LanguageSwitcher.css'

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
      <LanguageProvider>
        <LanguageSwitcher />
        
        <button className='get-posts-btn' onClick={handleButtonClick}>Click to fetch posts by click</button>
        {!!posts.length && <PostListAfetrClick posts={posts} />}
      </LanguageProvider>
    </>
  )
}

export default App
