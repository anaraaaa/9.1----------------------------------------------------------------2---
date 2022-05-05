import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <h2>AutoSYSadmin</h2>
      </Link>
      <div className="options">
        <Link className="option" to="/monday">
          Понедельник
        </Link>
        <Link className="option" to="/tuesday">
          Вторник
        </Link>
        <Link className="option" to="/wednesday">
          Среда
        </Link>
        <Link className="option" to="/thursday">
          Четверг
        </Link>
        <Link className="option" to="/friday">
          Пятница
        </Link>
        <Link className="option" to="/saturday">
          Суббота
        </Link>
        <Link className="option" to="/sunday">
          Воскресенье
        </Link>
      </div>
    </div>
  );
};
export default Header;
