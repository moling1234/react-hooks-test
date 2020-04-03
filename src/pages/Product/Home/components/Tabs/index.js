import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

const Tabs = (props) => {
  const [currentTab, setCurrentTab] = useState(() => 
    props.tabsList ? props.tabsList[0].code : ''
  );
  const [tabsList, setTabsList] = useState(() => props.tabsList || []); // tabs data

  useEffect(() => {
    console.log('tabsList', currentTab)
  });

  // 切换选中 tab
  const handleClickTabsItem = item => {
    setCurrentTab(item.code)
  };
  
  return (
    <div className={ classnames(styles.tabs_wrapper, props.isSuckTop ? styles.tabs_wrapper_suck_up : styles.tabs_wrapper_normal) }>

      <ul className={ styles.tabs_list }>
        {
          tabsList.map(item => {
            let isActive = item.code === currentTab;

            return (
              <li
                onClick={ () => { handleClickTabsItem(item) }}
                className={ classnames(styles.tabs_item, isActive && styles.tabs_item_active)  }
                key={ item.code }>
                { item.value }
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default Tabs;
