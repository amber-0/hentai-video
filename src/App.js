import './css/App.css';
import Signin from './components/Signin';
import Hentai from './components/Hentai';
import Nothentai from './components/Nothentai';
import Video from './components/Video';
import Profile from './components/Profile';
import Home from './components/Home';
import Sidebar from './components/Sidebar';

// ページ遷移用
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

const App = () => {
  return (
    // ページ遷移のため全体をRouterで囲う
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={ <Signin /> } />
          <Route path='/home' element={ <Home /> } />
          <Route path='/hentai' element={ <Hentai /> } />
          <Route path='/nothentai' element={ <Nothentai /> } />
          <Route path='/video' element={ <Video /> } />
          <Route path='/profile' element={ <Profile /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
