import HomePage from "./components/HomePage";
import Marquee from "./components/Marquee";
import MenuBar from "./components/MenuBar";
import TrendingNow from './components/TrendingNow'


function App() {
  return (
    <div className="App">
      <MenuBar />
      <HomePage />
      <Marquee />
      <TrendingNow />
    </div>
  );
}

export default App;
