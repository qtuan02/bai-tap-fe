import './index.css';
import Post from './components/Index';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormPost from './components/post/FormPost';

function App() {
  const dataPost = [
    { id: 1, title: 'Bài viết 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', comments: [ { id: 1, name: 'Tuan', content: 'Bình luận 1' }, { id: 2, name: 'Vinh', content: 'Bình luận 2' } ] },
    { id: 2, title: 'Bài viết 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { id: 3, title: 'Bài viết 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', comments: [ { id: 3, name: 'Huynh', content: 'Bình luận 3' } ] },
  ];


  useEffect(() => {
    localStorage.setItem('post', JSON.stringify(dataPost));
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/post" element={<FormPost />} />
        <Route path="/post/:id" element={<FormPost />} />
      </Routes>
    </Router>
  );
}

export default App;
