import React, { useEffect, useState } from 'react';
import { throttle } from 'lodash';

import IntroduceCard from './components/IntroduceCard'
import FixTabs from './components/FixTabs'

import styles from './index.module.scss';

const introduceCardLeftBg = require('./assets/introduce_card_left_bg.png');
const introduceCardRightBg = require('./assets/introduce_card_right_bg.png');

const tabsTypesData = [
  {
    code: '1', tyoe: '1', typeName: '高效批量招聘', tabList: [
      { code: 'recruitment', fullValue: '招聘', value: '招', type: '1', typeName: '高效批量招聘' },
      { code: 'screen', fullValue: '筛选', value: '筛', type: '1', typeName: '高效批量招聘' },
    ]
  },
  {
    code: '21', tyoe: '2', typeName: '陪伴式发展', tabList: [
      { code: 'train', fullValue: '训练', value: '训', type: '2', typeName: '陪伴式发展' },
      { code: 'cultivate', fullValue: '培育', value: '培', type: '2', typeName: '陪伴式发展' },
    ]
  },
  {
    code: '3', tyoe: '3', typeName: '人才资产数字化', tabList: [
      { code: 'choosePerson', fullValue: '用人', value: '用', type: '3', typeName: '人才资产数字化' },
      { code: 'weedOut', fullValue: '淘汰', value: '淘', type: '3', typeName: '人才资产数字化' }
    ]
  }
];

const IntroduceTabs = () => {
  const [isShowFixTab, setIsShowFixTab] = useState(false);
  const [introduceCardRef, setIntroduceCardRef] = useState();

  useEffect(() => {
    console.log('---->introduceCardRef', introduceCardRef)
    document.addEventListener('scroll', listener);
    return () => document.removeEventListener('scroll', listener)
  }, [])

  // 监听滚动事件判断是否吸顶
  const listener = throttle(() => {
    // 当滚动距离大于等于头部高度时吸顶，反之不
    console.log('scroll--->kkk', window.scrollY)
  }, 300);

  return (
    <div className={ styles.introduce_tabs }>
      <div className={ styles.introduce_tabs_content }>
        <IntroduceCard
          setIntroduceCardRef={ setIntroduceCardRef }
          tabsTypesData={ tabsTypesData } />
        {
          isShowFixTab &&
          <FixTabs tabsTypesData={ tabsTypesData } />
        }
      </div>

      <img
        src={ introduceCardLeftBg }
        className={ styles.introduce_card_left_bg }
        alt=""/>

      <img
        src={ introduceCardRightBg }
        className={ styles.introduce_card_right_bg }
        alt=""/>
    </div>
  );
};

export default IntroduceTabs;
