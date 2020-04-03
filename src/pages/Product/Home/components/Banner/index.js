import React from 'react';
import styles from './index.module.scss';

const bannerImg1 = require('./assets/banner_img-1.png');

const Banner = () => {
  return (
    <div className={ styles.banner_wrapper }>
      <div className={ styles.banner_content }>
        <div className={ styles.banner_left }>
          <div className={ styles.title }>一线人才生产力平台</div>
          <div className={ styles.sub_title }>陪伴2亿一线职场用户，提升企业生产力</div>

          <div className={ styles.button_group }>
            <span className={ styles.button_item }>查看演示</span>
            <span className={ styles.button_item }>申请试用</span>
          </div>
        </div>

        <div className={ styles.banner_right }>
          <img
            src={ bannerImg1 }
            className={ styles.img1 }
            alt=""/>
        </div>
      </div>
    </div>
  )
};

export default Banner;
