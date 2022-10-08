import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="header-wrapper">
              <div className="header-top offset-2">
                <img
                  onClick={(e) => navigate("/home")}
                  src="/H.png"
                  alt="logo"
                />
              </div>
              <div className="header-title offset-2">
                <h1>Horizontal - Hackathon 2022</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
