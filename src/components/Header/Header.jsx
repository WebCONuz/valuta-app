import React from "react";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes["header"]}>
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <Link to="/">
              <MdOutlineCurrencyExchange className="fs-3 text-white text-decoration-none" />
            </Link>

            <nav className="d-flex align-items-center">
              <NavLink to="/" className="text-white text-decoration-none">
                Home Page
              </NavLink>
              <NavLink
                to="/transactions"
                className="text-white text-decoration-none ms-5"
              >
                All Transactions
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
