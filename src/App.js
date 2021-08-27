import './App.css';
import Home from './Components/Home';
import pages  from './pages/home-page';
import BottomHeader from './pages/home-page/bottom-header/BottomHeader';
import MainHeader from './pages/home-page/main-header/MainHeader';

function App() {
  return (
    <div className="app">
      <MainHeader/>
      <BottomHeader/>
      <div className="home__pages">
       <Home/>
       </div>
    </div>
  );
}

export default App;
