import '@Assets/styles/Global.scss';
import { Provider } from 'react-redux';
import { store } from '@Redux/index';
import { func, node, object, oneOfType } from 'prop-types';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

MyApp.propTypes = {
  Component: oneOfType([func, node]).isRequired,
  pageProps: object,
};

export default MyApp;
