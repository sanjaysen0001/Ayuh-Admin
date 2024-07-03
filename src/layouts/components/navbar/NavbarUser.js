import React from "react";
import { useState, useEffect } from "react";

import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import axios from "axios";
import * as Icon from "react-feather";
import { Route } from "react-router-dom";
import axiosConfig from "../../../axiosConfig";

const handleNavigation = (e, path) => {
  e.preventDefault();
  // history.push(path);
  window.location.replace(path);
};

const NavbarUser = () => {
  const [adminData, setAdminData] = useState({});
  // console.log(notifications);

  const tokenVerify = () => {
    let data = sessionStorage.getItem("ad-token");

    if (data === undefined || data === null) {
      sessionStorage.clear();
      window.location.replace("/#/pages/login");
    }
  };

  useEffect(() => {
    tokenVerify();
    async function getNotifications() {
      let userId = JSON.parse(sessionStorage.getItem("AyuhAdminPanel"));
      await axiosConfig
        .get(`/admin/viewById/${userId?._id}`)
        .then((res) => {
          setAdminData(res.data.admin);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getNotifications();
  }, []);

  return (
    <ul className="nav navbar-nav navbar-nav-user float-right">
      <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
        <DropdownToggle tag="a" className="nav-link dropdown-user-link">
          <div className="user-nav d-sm-flex d-none">
            <span className="user-name text-bold-600" color="#fff">
              {adminData?.name}
            </span>
            {/* <span className="user-status">Available</span> */}
          </div>
          <span data-tour="user">
            <img
              src={`https://sample.rupioo.com/Images/${adminData?.image}`}
              className="round"
              height="40"
              width="40"
              alt="avatar"
            />
          </span>
        </DropdownToggle>
        {/* {/ <UserDropdown {...this.props} /> /} */}
        <DropdownMenu right>
          <DropdownItem
            tag="a"
            href="#"
            onClick={(e) => handleNavigation(e, "/#/pages/profile")}
          >
            <Icon.User size={14} className="mr-50" />
            <span className="align-middle">Edit Profile</span>
          </DropdownItem>

          <DropdownItem divider />
          <Route
            render={({ history }) => (
              <DropdownItem
                tag="a"
                onClick={(e) => {
                  localStorage.removeItem("ad-token");
                  window.location.replace("/#/pages/login");
                }}
              >
                <Icon.Power size={14} className="mr-50" />
                <span className="align-middle">Log Out</span>
              </DropdownItem>
            )}
          />
        </DropdownMenu>
      </UncontrolledDropdown>
    </ul>
  );
};
export default NavbarUser;
