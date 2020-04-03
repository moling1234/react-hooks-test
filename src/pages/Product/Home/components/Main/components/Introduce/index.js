import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';
import { introduceJson } from './jsonData'

const Introduce = props => {
  return (
    <div className={ styles.introduce_wrapper }>
      <ul className={ styles.introduce_list }>
        {
          introduceJson.list.map(item => {
            return (
              <li
                key={ item.code }
                className={ classnames(styles.introduce_item, styles[item.type]) }>
                <div className={ styles.item_left }>
                  <img
                    src={ item.title }
                    className={ styles.title }
                    alt='' />
                  <div className={ styles.sub_title }>{ item.subTitle }</div>

                  <ul className={ styles.desc_list }>
                    {
                      item.descList && item.descList.map(descItem => {
                        let len = item.descList.length
                        
                        return (
                          <li
                            key={ descItem.code }
                            className={ styles.desc_item }>
                            {
                              len > 0 &&
                              <span className={ styles.pre_icon }></span>
                            }
                            <span className={ styles.text }>
                              { descItem.text }
                            </span>
                          </li>
                        )
                      })
                    }
                  </ul>

                  <div className={ styles.button_group }>
                    {
                      item.btnList && item.btnList.map(btnItem => {
                        return (
                          <button
                            className={ styles.button_item }
                            key={ btnItem.text } >
                            {
                              btnItem.text &&
                              <span className={ styles.button_text }>{ btnItem.text }</span>
                            }

                            {
                              btnItem.img &&
                              <img
                                src={ btnItem.img }
                                className={ styles.button_img }
                                alt='' />
                            }
                          </button>
                        )
                      })
                    }
                  </div>
                </div>
                
                <div className={ styles.item_right }>
                  <img 
                    src={ item.imgUrl }
                    className={ styles.img_url } 
                    alt=''/>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default Introduce;
