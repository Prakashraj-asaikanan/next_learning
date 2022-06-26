import '@Assets/styles/Global.scss';
import { func, node, object, oneOfType } from 'prop-types';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: oneOfType([func, node]).isRequired,
  pageProps: object,
};

export default MyApp;
