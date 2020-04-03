import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ProjectMenu } from './NavMenu';
import fetch from '@ifchange-core/fetch-data';
import ajax from '@ifchange-core/ajax';
import Icon from '@ifchange-eui/iconfont';
import STYLES from './index.module.scss';
import classnames from 'classnames';
import applyModal from '../applyModal';

const LOGO = require('./assets/LOGO.svg');
const NAV_ARROW = require('./assets/nav_arrow.svg');

const ssoUrl = window.location.origin.replace('www', 'sso');

const Login = fetch({
  url: '/api/account/tenantInfo',
  method: 'POST',
  error: (
    <>
      <hr className={STYLES.nav_menu_hr} />
      <a href={ssoUrl}>登录</a>
    </>
  )
})(({ results, refresh }) => {
  if (results) {
    return (
      <>
        <a className={STYLES['product-center']} href={ssoUrl}>
          产品中心
        </a>
        <hr className={STYLES.nav_menu_hr} />
        <span className={STYLES['company-name']}>{results.companyName}</span>
        <Icon
          className={STYLES['logout']}
          type="logout"
          onClick={() => {
            ajax.get('/api/account/logout').then(() => {
              refresh();
            });
          }}
        />
      </>
    );
  }
  return (
    <>
      <hr className={STYLES.nav_menu_hr} />
      <a href={ssoUrl}>登录</a>
    </>
  );
});

// 一期临时登入到职位
const LoginTem = () => {
  const ssoLoginUrl = useMemo(() => {
    const host = window.location.host.split('.');
    return '//:' + [host[0] + '-sso'].concat(host.slice(1)).join('.');
  }, [])
  return (
    <>
      <hr className={STYLES.nav_menu_hr} />
      <a href={ssoLoginUrl}>登录</a>
    </>
  )
}

const NAV_MENU = [
  {
    name: (
      <>
        产品
        <img className={STYLES.nav_arrow} src={NAV_ARROW} alt="" />
      </>
    ),
    dropdown: ProjectMenu
  },
  { name: '关于我们', path: '/' },
  { name: <span onClick={() => applyModal()}>申请试用</span> },
  { name: <LoginTem />, className: STYLES['login-user'] }
];

const SCROLL_HEIGHT = 100;
const LOGO_HEIGHT = [24, 20];
const NAV_STATE = [60, 50];
const NAV_BG = [0, 0.86];

/**
 * 导航
 */
const Navigation = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const navEl = useRef();

  useEffect(() => {
    const asyncTop = () => {
      setScrollTop(
        document.body.scrollTop || document.documentElement.scrollTop
      );
    };
    asyncTop();
    window.addEventListener('scroll', asyncTop);

    return () => {
      window.removeEventListener('scroll', asyncTop);
    };
  }, []);

  // 计算搜索比例
  const computedScale = region => {
    return region[0] - (region[0] - region[1]) * (scrollTop / SCROLL_HEIGHT);
  };

  // 判断对应比例
  let navStyle = {},
    logoStyle = {};

  if (scrollTop > SCROLL_HEIGHT) {
    navStyle = {
      height: NAV_STATE[1],
      lineHeight: NAV_STATE[1] + 'px',
      backgroundColor: 'rgba(19, 24, 39, 0.86)'
    };
    logoStyle = { height: LOGO_HEIGHT };
  } else {
    const navHeight = computedScale(NAV_STATE);
    navStyle = {
      height: navHeight,
      lineHeight: navHeight + 'px',
      backgroundColor: `rgba(19, 24, 39, ${computedScale(NAV_BG)})`
    };
    logoStyle = { height: computedScale(LOGO_HEIGHT) };
  }

  return (
    <div className={STYLES.nav_wrapper} style={navStyle}>
      <div className={STYLES.nav_content} ref={navEl}>
        <h1 className={STYLES.nav_logo}>
          <Link to="/">
            <img src={LOGO} alt="上海逸橙信息科技有限公司" style={logoStyle} />
          </Link>
        </h1>
        <ul className={STYLES.nav_menu}>
          {NAV_MENU.map((item, index) => {
            if (item.hr) {
              return (
                <li className={STYLES.nav_menu_hr} key={String(index)}></li>
              );
            }

            return (
              <li
                className={classnames(STYLES.nav_menu_item, item.className)}
                key={String(index)}>
                {item.dropdown ? (
                  React.cloneElement(item.dropdown, {
                    children: <span>{item.name}</span>,
                    getPopupContainer: () => {
                      return navEl.current;
                    }
                  })
                ) : item.path ? (
                  item.tag === 'a' ? (
                    <a href={item.path} target="_self" {...(item.params || {})}>
                      {item.name}
                    </a>
                  ) : (
                    <Link to={item.path}>{item.name}</Link>
                  )
                ) : (
                  item.name
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
