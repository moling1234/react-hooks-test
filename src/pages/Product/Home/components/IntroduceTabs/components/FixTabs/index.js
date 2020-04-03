import React from 'react';
import Tabs from './components/Tabs'
import styles from './index.module.scss';

const FixTabs = props => {
  const { tabsTypesData = [] } = props;

  const tabsListData = tabsTypesData.map(item => item.tabList).flat(1);

  return (
    <div className={ styles.fix_tabs_wrapper }>
      <Tabs tabsListData={ tabsListData } />
    </div>
  );
};

export default FixTabs;
