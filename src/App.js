import './App.scss';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Project from './pages/project/Project';
import Wrapper from "./component/wrapper/Wrapper";

const App = () => {
  return (
    <>
      <Router>
        <Wrapper>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/project" element={<Project />} />
          </Routes>
        </Wrapper>
      </Router>
    </>
  );
};

export default App;
