import "./App.css";
import Education from "./components/Education";
import Footer from "./components/Footer";
import LatestVideo from "./components/LatestVideo";
import MainBlog from "./components/MainBlog";
import Navbar from "./components/Navbar";
import RecentBooks from "./components/RecentBooks";
import SubNews from "./components/SubNews";

function App() {
  return (
    <>
      <Navbar />
      <MainBlog />
      <SubNews />
      <LatestVideo />
      <Education />
      <RecentBooks />
      <Education />
      <Footer />
    </>
  );
}

export default App;
