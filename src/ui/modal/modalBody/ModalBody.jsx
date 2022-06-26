import { node, oneOfType, string } from 'prop-types';

const ModalBody = ({ children }) => {
  return children;
};

ModalBody.propTypes = {
  children: oneOfType([string, node]).isRequired,
};

export default ModalBody;
