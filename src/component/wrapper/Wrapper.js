import React from 'react';
import "./Wrapper.scss";
import NavBar from '../navBar/NavBar';
import FadeIn from 'react-fade-in/lib/FadeIn';
import ScrollToTop from '../scrollToTop/ScrollToTop';

const Wrapper = ({ children }) => {
  return (
    <FadeIn>
      <ScrollToTop />
      <div className="wrapper">
        <NavBar />
        <div>
          {children}
        </div>
      </div>
    </FadeIn>
  );
};

export default Wrapper;
