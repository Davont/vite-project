import { StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';

import './styles/index.less';

const container = document.getElementById('app') as HTMLElement;
function App() {
  return (
    <StrictMode>
      {/* <Suspense fallback={<>loading</>}> */}
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      {/* </Suspense> */}
    </StrictMode>
  );
}

ReactDOM.createRoot(container).render(<App />);
