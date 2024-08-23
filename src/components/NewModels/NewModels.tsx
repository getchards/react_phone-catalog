import classNames from 'classnames';
import { useState } from 'react';
import { NewModelsList } from '../NewModelsList';

export const NewModels = () => {
  const [isDisabled] = useState(false);

  return (
    <div className="newmodels">
      <div className="newmodels__top">
        <h1 className="newmodels__title">Brand new models</h1>
        <div className="newmodels__buttons">
          <div
            className={classNames('newmodels__button', {
              'is-disabled-button': isDisabled,
            })}
          >
            <i className="arrow-icon arrow-icon-left"></i>
          </div>
          <div className="newmodels__button">
            <i className=" arrow-icon arrow-icon-right"></i>
          </div>
        </div>
      </div>
      <NewModelsList />
    </div>
  );
};
