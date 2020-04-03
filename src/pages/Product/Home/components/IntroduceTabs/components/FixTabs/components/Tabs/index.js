import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import styles from './index.module.scss';

const Tabs = (props) => {
  const [currentTab, setCurrentTab] = useState();
  const [tabsList, setTabsList] = useState([]);

  useEffect(() => {
    setTabsList(props.tabsListData || []);
    setCurrentTab(() => tabsList[0] ? tabsList[0].code : null)
    console.log(props)
  }, [props]);

  // 切换选中 tab
  const handleClickTabsItem = item => {
  };
  
  return (
    <div className={ styles.tabs_wrapper }>

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
