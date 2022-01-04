import React from 'react';
import "./Wrapper.scss";
import NavBar from '../navBar/NavBar';

const Wrapper = ({ children }) => {
  return (
    <div className="wrapper">
      <NavBar />
      <div>
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
