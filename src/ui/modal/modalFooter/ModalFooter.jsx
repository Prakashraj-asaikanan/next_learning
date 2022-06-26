import { string, node, oneOfType } from 'prop-types';

const ModalFooter = ({ children }) => {
  return children;
};

ModalFooter.propTypes = {
  children: oneOfType([string, node]).isRequired,
};

export default ModalFooter;
