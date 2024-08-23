import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { useState } from 'react';
import { Sidebar } from '../AsideBar';

export const Header: React.FC = () => {
  const [hasMenu, setHasMenu] = useState(false);

  return (
    <div className="header">
      <div className="header__top">
        <div className="header__container">
          <Link
            to="/"
            className="header__logo"
            onClick={() => setHasMenu(false)}
          >
            <img
              src="./images/top-bar_logo.png"
              alt="logo"
              className="header__logo--img"
            />
          </Link>
          <nav className="nav header__nav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                classNames('nav__link', {
                  'nav__link--active': isActive,
                })
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/phones"
              className={({ isActive }) =>
                classNames('nav__link', {
                  'nav__link--active': isActive,
                })
              }
            >
              Phones
            </NavLink>

            <NavLink
              to="/tablets"
              className={({ isActive }) =>
                classNames('nav__link', {
                  'nav__link--active': isActive,
                })
              }
            >
              Tablets
            </NavLink>

            <NavLink
              to="/accessories"
              className={({ isActive }) =>
                classNames('nav__link', {
                  'nav__link--active': isActive,
                })
              }
            >
              Accessories
            </NavLink>
          </nav>
        </div>
        <div className="header__action">
          <a
            className="header__icon header__icon--mobile"
            onClick={() => setHasMenu(!hasMenu)}
          >
            <img
              src={
                hasMenu
                  ? './images/top-bar_close.png'
                  : './images/top-bar_menu.png'
              }
              alt="menu"
              className="header__icon--img"
            />
          </a>
          <NavLink
            to="/favourite"
            className={({ isActive }) =>
              classNames('header__icon header__icon--tablet', {
                'header__icon--active': isActive,
              })
            }
          >
            <div className="header__icon-container">
              <img
                src="./images/top-bar_favourites.png"
                alt="favourite"
                className="header__icon--img"
              />
              {true && <p className="header__icon-number">12</p>}
            </div>
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              classNames('header__icon header__icon--tablet', {
                'header__icon--active': isActive,
              })
            }
          >
            <div className="header__icon-container">
              <img
                src="./images/top-bar_cart.png"
                alt="shopBag"
                className="header__icon--img"
              />
              {true && <p className="header__icon-number">12</p>}
            </div>
          </NavLink>
        </div>
      </div>

      <Sidebar hasMenu={hasMenu} closeMenu={() => setHasMenu(false)} />
    </div>
  );
};
