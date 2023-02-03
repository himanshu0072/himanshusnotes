import './App.css';
import Footer from './components/Footer';
import LatestVideo from './components/LatestVideo';
import MainBlog from './components/MainBlog';
import Navbar from './components/Navbar';
import SubNews from './components/SubNews';

function App() {
  return (
    <>
    <Navbar/>
    <MainBlog/>
    <SubNews/>
    <LatestVideo/>
    <Footer/>
    </>
  );
}

export default App;
