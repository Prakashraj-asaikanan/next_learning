import { createContext, useContext } from 'react';

const ModelContext = createContext({
  show: false,
  closeModal: null,
});

export const useModalContext = () => useContext(ModelContext);

export default ModelContext;
