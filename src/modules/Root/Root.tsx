import { Routes, Route } from 'react-router-dom';
import { App } from '../App';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import HomePage from '../HomePage/HomePage';

const Root = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);

export default Root;
