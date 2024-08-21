import HomeSlider from '../../components/HomeSlider/HomeSlider';

const HomePage = () => {
  return (
    <main className="homepage">
      <div className="homepage__outer-container">
        <div className="homepage__container">
          <h1 className="homepage__header">Welcome to Nice Gadgets store!</h1>
          <HomeSlider />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
