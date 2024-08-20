import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Root from './modules/Root/Root';

createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>,
);
