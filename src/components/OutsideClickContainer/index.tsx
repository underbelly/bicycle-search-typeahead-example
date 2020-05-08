import React, {useEffect, useRef} from 'react';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const OutsideClickContainer = ({children, onClick}: Props) => {
  const wrapperRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event: CustomEvent) {
      // @ts-ignore
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onClick();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside as EventListener);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener(
        'mousedown',
        handleClickOutside as EventListener,
      );
    };
  }, [wrapperRef, onClick]);

  return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideClickContainer;
