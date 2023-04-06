import Box from "./components/Box";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Marquee from "./components/Marquee";
import MenuBar from "./components/MenuBar";
import Process from "./components/Process";
import TrendingNow from './components/TrendingNow'
import Steps from "./components/Steps";


function App() {
  return (
    <div className="App">
      <MenuBar />
      <HomePage />
      <Marquee />
      <TrendingNow />
      <Steps />
      <Process />
      <Box />
      <Footer />
    </div>
  );
}

export default App;
