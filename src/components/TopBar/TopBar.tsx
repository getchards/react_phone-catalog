import './TopBar.scss';

export const TopBar = () => (
  <div className="top-bar">
    <div className="top-bar__left">
      <div className="top-bar__left-logo"></div>
    </div>
    <div className="top-bar__items">
      <div className="top-bar__item">Home</div>
      <div className="top-bar__item">Phones</div>
      <div className="top-bar__item">Tablets</div>
      <div className="top-bar__item">Accessories</div>
    </div>
    <div className="top-bar__search"></div>
    <div className="top-bar__right">
      <div className="top-bar__favourites">
        <div className="top-bar__icon1"></div>
      </div>
      <div className="top-bar__cart">
        <div className="top-bar__icon2"></div>
      </div>
    </div>
  </div>
);
