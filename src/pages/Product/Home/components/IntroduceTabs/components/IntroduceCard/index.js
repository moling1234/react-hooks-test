import React, { useEffect, useRef } from 'react';

import styles from './index.module.scss';

const introduceCardTitleLeft = require('../../assets/introduce_card_title_left.png');
const introduceCardTitleRight = require('../../assets/introduce_card_title_right.png');

const IntroduceCard = props => {
  const IntroduceCardRef = useRef();
  const { tabsTypesData, setIntroduceCardRef } = props;

  useEffect(() => {
    console.log(IntroduceCardRef)
    setIntroduceCardRef(IntroduceCardRef)
  }, [])

  return (
    <div className={ styles.introduce_tabs } ref={ IntroduceCardRef }>
      <div className={ styles.title }>
        <img
          src={ introduceCardTitleLeft }
          className={ styles['title_img-left'] }
          alt=""/>
        <span className={ styles.text }>提升企业生产力</span>
        <img
          src={ introduceCardTitleRight }
          className={ styles['title_img-right'] }
          alt=""/>
      </div>

      <ul className={ styles.tabs_type_list }>
        {
          tabsTypesData.map(item => {
            return (
              <li 
                className={ styles.tabs_type_item }
                key={ item.code }>
                <div className={ styles.type_name }>{ item.typeName }</div>

                <div className={ styles.tab_list }>
                  {
                    item.tabList && item.tabList.map(tabItem => {
                      return (
                        <span 
                          className={ styles.tab_item }
                          key={ tabItem.code }>
                          { tabItem.value }
                        </span>
                      )
                    })
                  }
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default IntroduceCard;
