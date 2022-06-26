import useBrowserLayoutEffect from '@Hooks/UseBrowserLayoutEffect';
import { isTypeOf } from '@Utils/Types';
import { bool, func, node, object, oneOfType, string } from 'prop-types';
import { useRef } from 'react';
require('intersection-observer');

const isIntersectObserverSupported =
  typeof window !== 'undefined' && !!window?.IntersectionObserver;

const LazyObserver = ({
  children,
  options,
  observe,
  handleOnIntersection,
  handleOnIntersectionFallback,
}) => {
  if (!children) return null;

  if (!observe) return children;

  const lazyRef = children.ref ?? useRef();
  const refs = {
    ...(isTypeOf(children.type, 'function') ? { forwardRef: lazyRef } : { ref: lazyRef }),
  };

  const initObserver = () => {
    if (isIntersectObserverSupported && handleOnIntersection && lazyRef?.current) {
      let lazyObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          /* istanbul ignore else */
          if (entry.isIntersecting) {
            const lazyElem = entry.target;

            handleOnIntersection(lazyElem);
            lazyObserver.unobserve(lazyElem);
          }
        });
      }, options);

      lazyObserver.observe(lazyRef?.current);
    } else {
      handleOnIntersectionFallback && handleOnIntersectionFallback(lazyRef?.current);
    }
  };

  useBrowserLayoutEffect(() => {
    initObserver();
  }, []);

  return <children.type {...children.props} {...refs} />;
};

LazyObserver.propTypes = {
  observe: bool,
  handleOnIntersection: func,
  handleOnIntersectionFallback: func,
  options: object,
  children: oneOfType([string, node]).isRequired,
};

LazyObserver.defaultProps = {
  options: {
    rootMargin: '200px',
    threshold: 0.01,
  },
  handleOnIntersection: null,
  handleOnIntersectionFallback: null,
  observe: true,
};

export default LazyObserver;
