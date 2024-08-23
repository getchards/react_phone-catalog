type Props = {
  name: string;
  price: number;
  image: string;
  capacity: string;
  color: string;
  screen: string;
  ram: string;
};

export const NewModelsItem: React.FC<Props> = ({
  name,
  price,
  image,
  capacity,
  screen,
  ram,
}) => {
  return (
    <div className="newmodels-item">
      <img src={image} alt={name} className="newmodels-item__image" />

      <div className="newmodels-item__wrapper">
        <h2 className="newmodels-item__title">{name}</h2>
      </div>

      <h3 className="newmodels-item__price">${price}</h3>

      <div className="newmodels-item__params">
        <div className="newmodels-item__params-screen">
          <h4 className="newmodels-item__name">Screen:</h4>
          <p className="newmodels-item__value">{screen}</p>
        </div>

        <div className="newmodels-item__params-capacity">
          <h4 className="newmodels-item__name">Capacity:</h4>
          <p className="newmodels-item__value">{capacity}</p>
        </div>

        <div className="newmodels-item__params-ram">
          <h4 className="newmodels-item__name">RAM:</h4>
          <p className="newmodels-item__value">{ram}</p>
        </div>
      </div>
    </div>
  );
};
