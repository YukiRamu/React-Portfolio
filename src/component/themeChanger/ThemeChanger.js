import React from 'react';
import "./ThemeChanger.scss";
import { Form } from 'react-bootstrap';

const ThemeChanger = () => {

  const changeTheme = () => {

  };

  return (
    <>
      <Form className="themeChangeSwitch">
        <Form.Check
          type="switch"
          className="themeChanger"
          onChange={changeTheme}
        />
        <Form.Label>{theme.mode === "dark" ? "Dark" : "Light"}</Form.Label>
      </Form>
    </>
  );
};

export default ThemeChanger;
