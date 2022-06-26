import { node, string } from 'prop-types';
import { createPortal } from 'react-dom';

const Portal = ({ children, rootId }) => {
  let root = document.getElementById(rootId);
  if (!root) {
    root = document.createElement('div');
    root.setAttribute('id', rootId);
    document.body.append(root);
  }

  return createPortal(children, root);
};

Portal.propTypes = {
  children: node.isRequired,
  rootId: string.isRequired,
};

export default Portal;
