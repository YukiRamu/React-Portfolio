import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Wrapper from "./component/wrapper/Wrapper";
import ScrollToTop from "./component/scrollToTop/ScrollToTop";


const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Wrapper>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Wrapper>
      </Router>
    </>
  );
};

export default App;
