
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllPosts from './pages/AllPosts';
import { routePath } from './routes/route';
import CreatePost from './pages/CreatePost';
import AllPostsLocal from './pages/AllPostsLocal';
import Auth from './pages/Auth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routePath.home} element={<Home />} />
        <Route path={routePath.posts} element={<AllPosts />} />
        <Route path={routePath.create} element={<CreatePost />} />
        <Route path={routePath.demo} element={<AllPostsLocal />} />
        <Route path={routePath.auth} element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
