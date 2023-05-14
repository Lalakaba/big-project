import React from "react";
import news from '../LogoIcons/img/feed.svg';
import { ReactComponent as Profile } from './img/profile.svg'
import './Icons.css'


export const HeaderIcons =()=> {
    return(

      <div className='header__icons'>
      <Like className='header__like' />
      {!!favorites.length && <span className='header__bubble'>{favorites.length}</span>}
  

  <Link to={'/login'} onClick={()=>setModalActive(true)}>
  <Profile  className='header__icon' />
  </Link>
</div>

    )
}
export default HeaderIcons;
