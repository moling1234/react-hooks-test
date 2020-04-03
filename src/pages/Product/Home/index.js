import React, { useState, useEffect } from 'react';
import Main from './components/Main';
import Banner from './components/Banner';
import IntroduceTabs from './components/IntroduceTabs';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import applyModal from '../components/applyModal';
import FixedBar from '../components/loginFixBar';

import './index.scss';

const Product = () => {
  const [moveStyle, setMoveStyle] = useState({});

  useEffect(() => {
    const move = () => {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      const base = 52; // 520 * 0.1 根据二屏内容位于屏幕中间时，scrollTop 为520
      console.log(scrollTop)
      setMoveStyle({
        firstRight: { marginTop: `${270 + scrollTop * 0.3}px` },
        secondRight: { bottom: `${74 - scrollTop * 0.2 + base}px` },
        secondLeft: { top: `${26 + scrollTop * 0.25 - base}px` },
        secondBottom: { top: `${480 - scrollTop * 0.3 + base}px` },
        secondTop: { top: `${-370 - scrollTop * 0.1}px` }
      });
    };
    move();
    window.addEventListener('scroll', move);
    return () => {
      window.removeEventListener('scroll', move);
    };
  }, []);

  const onRightBtnClick = hmt_category => {
    applyModal();
  };

  return (
    <div className='home_container'>
      <Navigation />

      <Banner />

      <IntroduceTabs />

      <Main moveStyle={ moveStyle }></Main>

      <Footer onRegistryClick={() => onRightBtnClick('底部')} />

      <FixedBar applyShow onRegistryClick={() => onRightBtnClick('右侧边栏')} />
    </div>
  );
};

export default Product;
