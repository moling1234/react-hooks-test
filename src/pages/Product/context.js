import React, { useState, useEffect } from 'react';
import { throttle } from 'lodash';

const MyContext = React.createContext();

export const MyContextProvider = (props) => {
  const [isSuckTop, setIsSuckTop] = useState(false); // 是否吸顶
  const [headerRef, setHeaderRef] = useState(null)
  
  useEffect(() => {
    // 监听滚动事件判断是否吸顶
    const listener = throttle(() => {
      // 当滚动距离大于等于头部高度时吸顶，反之不
      if (headerRef && window.scrollY >= headerRef.current.clientHeight) {
        setIsSuckTop(true)
      } else {
        setIsSuckTop(false)
      }
      // console.log('scroll--->', window.scrollY)
      // console.log('headerRef--->', headerRef, headerRef ? headerRef.current.clientHeight : '')
    }, 300);
    document.addEventListener('scroll', listener);

    return () => document.removeEventListener('scroll', listener)
  });

  return (
    <MyContext.Provider
      value = {{
        isSuckTop,
        setHeaderRef
      }}>
      { props.children }
    </MyContext.Provider>
  )
};

export default MyContext;
