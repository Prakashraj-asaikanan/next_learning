import { bool, string } from 'prop-types';
import React, { memo, useRef, useLayoutEffect } from 'react';
import { Col } from '@UI/layout';
import usePrevious from '@Hooks/usePrevious';

const SingleOTPInputComponent = (props) => {
  const { focus, autoFocus, ...rest } = props;
  const inputRef = useRef();
  const prevFocus = usePrevious(!!focus);

  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus();
      }
      if (focus && autoFocus && focus !== prevFocus) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }
  }, [autoFocus, focus, prevFocus]);

  return (
    <Col>
      <input ref={inputRef} {...rest} />
    </Col>
  );
};

const SingleOTPInput = memo(SingleOTPInputComponent);

SingleOTPInputComponent.propTypes = {
  focus: bool,
  className: string,
  autoFocus: bool,
};

export default SingleOTPInput;
