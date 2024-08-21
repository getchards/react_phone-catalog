import classNames from 'classnames';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const getActiveClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'navigation__item active-link' : 'navigation__item';

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
          <div className="header__left">
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
                  <NavLink className={getActiveClass} to="/">
                    Home
                  </NavLink>
                </li>
                <li className="navigation__item">
                  <NavLink className={getActiveClass} to="phones">
                    Phones
                  </NavLink>
                </li>
                <li className="navigation__item">
                  <NavLink className={getActiveClass} to="tablets">
                    Tablets
                  </NavLink>
                </li>
                <li className="navigation__item">
                  <NavLink className={getActiveClass} to="accessories">
                    Accessories
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="navigation__right">
            <div className="navigation__right-container">
              <div className="navigation__right-item">
                <NavLink
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive ? ' active-link' : ''
                  }
                  to="favourites"
                >
                  <div className="navigation__right-item1"></div>
                </NavLink>
              </div>
            </div>
            <div className="navigation__right-container">
              <div className="navigation__right-item">
                <NavLink className="navigation__cart-box" to="cart">
                  <div className="navigation__right-item2"></div>
                  <div className="goods-in-cart"></div>
                </NavLink>
              </div>
            </div>
          </div>
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
