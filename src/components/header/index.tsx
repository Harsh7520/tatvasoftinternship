import React, { useMemo, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { headerStyle } from "./style";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import ListItem from "@material-ui/core/ListItem";
import siteLogo from "../../assets/images/site-logo.svg";
import searchIcon from "../../assets/images/search.png";
import { materialCommonStyles } from "../../utils/materialCommonStyles";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@material-ui/core";

import { AuthContextModel, useAuthContext } from "../../context/auth";
import { RoutePaths } from "../../utils/enum";

const Header: React.FC = () => {
  const classes = headerStyle();
  const authContext: AuthContextModel = useAuthContext();
  const materialClasses = materialCommonStyles();
  const [open, setOpen] = useState<boolean>(false);

  // for mobile menu
  return (
    <div className={classes.headerWrapper}>
      <AppBar className="site-header" id="header" position="static">
        <div
          className="top-header"
          style={{ display: open ? "none" : "block" }}
        ></div>
        <div className="bottom-header">
          <div className="container">
            <div className="header-wrapper">
              <div className="logo-wrapper">
                <Link to="/" className="site-logo" title="logo">
                  <img src={siteLogo} alt="logo" />
                </Link>
              </div>
              <div className="nav-wrapper">
                <div className="top-right-bar">
                  <List className="top-nav-bar">
                    {!authContext.user.id && (
                      <>
                        <ListItem>
                          <Link to={RoutePaths.Login} title="Login">
                            Login
                          </Link>
                        </ListItem>
                        <ListItem>
                          <Link to={RoutePaths.Register} title="Register">
                            Register
                          </Link>
                        </ListItem>
                      </>
                    )}
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-search-wrapper">
          <div className="container">
            <div className="header-search-outer">
              <div className="header-search-inner">
                <div className="text-wrapper">
                  <TextField
                    id="text"
                    name="text"
                    placeholder="What are you looking for..."
                    variant="outlined"
                  />
                </div>
                <Button
                  type="submit"
                  className="green-btn btn"
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  <em>
                    <img src={searchIcon} alt="search" />
                  </em>
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AppBar>
    </div>
  );
};

export default Header;
