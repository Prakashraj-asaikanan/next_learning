import { useEffect, useRef } from 'react';
import useBrowserLayoutEffect from './UseBrowserLayoutEffect';

const watchOuterClicks = (watch, callback) => {
  const callbackRef = useRef();
  const innerRef = useRef(); // returned to client

  // update callback on each render, so we have access to most recent callback
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useBrowserLayoutEffect(() => {
    if (watch) {
      document.addEventListener('click', handleClick);

      return () => document.removeEventListener('click', handleClick);
    }

    function handleClick(e) {
      if (innerRef.current && callbackRef.current && !innerRef?.current?.contains(e.target))
        callbackRef.current(e);
    }
  }, [watch]);

  return innerRef;
};

export default watchOuterClicks;
