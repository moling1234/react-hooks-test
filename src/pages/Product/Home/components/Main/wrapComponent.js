import React, { useState, useEffect, useRef } from 'react';

export default (WrapComponent, height) => props => {
  const [load, setLoad] = useState(false);
  const elRef = useRef();

  useEffect(() => {
    const listenerDomInView = () => {
      const offsetTop = elRef.current.offsetTop;
      const elHeight = elRef.current.clientHeight;

      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      const viewTop = scrollTop + window.innerHeight;

      if (viewTop > offsetTop + (height || elHeight / 1.8) && !load) {
        setLoad(true);
      }
    };

    listenerDomInView();

    window.addEventListener('scroll', listenerDomInView);

    return () => {
      window.removeEventListener('scroll', listenerDomInView);
    };
  }, [load]);

  return (
    <section className={`item ${load ? 'action' : ''}`} ref={elRef}>
      <WrapComponent {...props} />
    </section>
  );
};
