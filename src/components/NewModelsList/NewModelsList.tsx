import { NewModelsItem } from '../NewModelsItem';
import phonesData from '../../api/phones.json';

export const NewModelsList = () => {
  const phones = phonesData;

  return (
    <div className="newmodels-list">
      <div className="newmodels-list__container">
        {phones.map(phone => (
          <NewModelsItem
            key={phone.id}
            name={phone.name}
            price={phone.priceDiscount || phone.priceRegular}
            image={phone.images[0]}
            capacity={phone.capacity}
            color={phone.color}
            ram={phone.ram}
            screen={phone.screen}
          />
        ))}
      </div>
    </div>
  );
};
