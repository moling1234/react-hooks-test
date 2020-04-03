import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '@ifchange-eui/dropdown';
import Menu from '@ifchange-eui/menu';

import STYLES from './index.module.scss';

// 导航菜单配置
const PROJECT_MENU = [
  // { name: '数字化招聘', path: '/intro/recruitment', target: '_self' },
  { name: '数字化员工服务', path: '/intro/ssc', target: '_self' },
  { name: '数字化人才咨询', path: '/intro/advisory', target: '_self' }
];

export const ProjectMenu = (
  <Dropdown
    placement="bottomCenter"
    align={{
      offset: [0, -5]
    }}
    showArrow
    overlayClassName={STYLES.nav_menu_dropdown_wrapper}
    overlay={
      <Menu
        className={[STYLES.nav_menu_dropdown, STYLES.project_menu].join(' ')}
        selectedKeys={[]}>
        {PROJECT_MENU.map((item, index) => {
          return (
            <Menu.Item key={String(index)}>
              <Link to={item.path} target={item.target}>
                {item.name}
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    }
  />
);

// 登入菜单配置
const LOGIN_MENU = [
  { name: '数字化招聘', path: '/login', target: '_blank' },
  {
    name: '数字化员工服务',
    path: '//ssc.ifchange.com',
    target: '_blank'
  },
  {
    name: '数字化人才咨询',
    path: '//talentreview.ifchange.com',
    target: '_blank'
  }
];

export const LoginMenu = (
  <Dropdown
    showArrow
    placement="bottomCenter"
    align={{
      offset: [0, -5]
    }}
    overlayClassName={STYLES.nav_menu_dropdown_wrapper}
    overlay={
      <Menu
        className={[STYLES.nav_menu_dropdown, STYLES.login_menu].join(' ')}
        selectedKeys={[]}>
        {LOGIN_MENU.map((item, index) => {
          return (
            <Menu.Item key={String(index)}>
              <Link to={item.path} target={item.target}>
                {item.name}
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    }
  />
);
