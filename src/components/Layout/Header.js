import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import logoImage from '../../assets/logo.png';
import mealsImage from '../../assets/homescreen-bg.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img src={logoImage} alt='Logo'/>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
