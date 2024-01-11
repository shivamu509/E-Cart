import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import DataFilter from "./DataFilter";

const Navbar = ({ setData, cart }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };
  return (
    <>
        <div className="nav-bar sticky-top">
          <Link to={"/"} className="brand">
            E-Cart
          </Link>

          <form
            onSubmit={handleSubmit}
            className="search-bar d-none d-md-flex input-group w-auto my-auto"
          >
            <input
              className="form-control"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search Products"
            />
            <button className="input-group-text border-0"><i className="fas fa-search" id="mdb-5-search-icon"></i></button>
          </form>
          <Link to={"/cart"} className="cart">
            <button type="button" className="btn btn-primary position-relative">
              <BsFillCartCheckFill style={{ fontSize: "1.5rem" }} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>
        <DataFilter setData={setData}/>
    </>
  );
};

export default Navbar;
