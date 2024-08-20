import classNames from 'classnames';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const closeMenu = () => {
    setIsMenuOpened(false);
  };

  const handleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__menu">
          <Link className="header__logo-link" to="/" onClick={closeMenu}>
            <img
              src="./images/top-bar_logo.png"
              alt="Logo"
              className="header__logo"
            />
          </Link>
          <nav className={classNames('navigation')}>
            <ul className="navigation__list">
              <li className="navigation__item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="navigation__item">
                <NavLink to="phones">Phones</NavLink>
              </li>
              <li className="navigation__item">
                <NavLink to="tablets">Tablets</NavLink>
              </li>
              <li className="navigation__item">
                <NavLink to="accessories">Accessories</NavLink>
              </li>
            </ul>
            <div className="navigation__right">
              <div className="">
                <div className="navigation__right-container">
                  <NavLink to="favourites">
                    <div className="navigation__right-item1"></div>
                  </NavLink>
                </div>
              </div>
              <div className="navigation__right-item">
                <div className="navigation__right-container">
                  <NavLink to="cart">
                    <div className="navigation__right-item2"></div>
                  </NavLink>
                </div>
              </div>
            </div>
          </nav>
          <div className="header__burger">
            {isMenuOpened ? (
              <img
                src="./images/top-bar_close.png"
                alt="Close menu"
                onClick={handleMenu}
                className="header__icon"
              />
            ) : (
              <img
                src="./images/top-bar_menu.png"
                alt="Open menu"
                onClick={handleMenu}
                className="header__icon"
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
