import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
      <ToastContainer />
    </>
  );
}

export default App;
