import React, { useContext } from "react";
import { ReactComponent as LogoSvg } from "../LogoIcons/img/logo.svg";
import HeaderIcons from "../LogoIcons/HeaderIcons";
import "./header.module.css";
import { Link } from "react-router-dom";
import {useLocation} from 'react-router';
import { Search } from "../Searching/Search";
import { PostsContext } from "../Context/PostsContext";

export const Header = (props) => {

  const setSearchQuery = (path) => {
      // console.log({path});
      props.setSearch(path);
  }

  const location = useLocation();

  const { favorites, setModalActive } = useContext(PostsContext);

  return <div className="header">
      <div className='container'>
          <div className='header__wrapper'>
              <Link to={'/'}>
                  <LogoSvg className='logo' />
              </Link>
              {location.pathname === '/' && <Search setSearch={setSearchQuery} />}
              <HeaderIcons/>
          </div>
      </div>
  </div>
}
