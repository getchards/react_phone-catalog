import { HomeSlider } from '../../components/HomeSlider';
import { NewModels } from '../../components/NewModels';

const HomePage = () => {
  return (
    <main className="homepage">
      <div className="homepage__outer-container">
        <div className="hom6epage__container">
          <h1 className="homepage__header">Welcome to Nice Gadgets store!</h1>
          <HomeSlider />
          <NewModels />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
