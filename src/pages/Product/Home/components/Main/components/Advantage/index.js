import React from 'react';

import styles from './index.module.scss';

const advantageList = [
  { code: 0, title: '专家团队', desc: '汇聚全球顶尖咨询公司的专家团队，为产品提供领先的专家理论和实践经验；为客户提供富有专业价值的实施建议', img: require('@/assets/introduce_advantage_list_img-1.png') },
  { code: 1, title: '算法积累', desc: '历时7年，经10万+企业验证的行业知识图谱；术业专攻，深入3大核心应用场景，打造HR领域首家AI开放平台', img: require('@/assets/introduce_advantage_list_img-2.png') },
  { code: 2, title: '极致服务', desc: '资深项目团队为客户提供个性化解决方案，并保障实施；客户成功团队7*24小时响应，同时为您带来最新的产品升级资讯', img: require('@/assets/introduce_advantage_list_img-3.png') },
];

const introduceAdvantageTitleAfterPng = require('@/assets/introduce_advantage_title_after.png');

const Advantage = () => {
  return (
    <div className={ styles.advantage_wrapper }>
      <div className={ styles.advantage_title }>
        <p className={ styles.text }>我们的优势</p>
        
        <img
          src={ introduceAdvantageTitleAfterPng }
          className={ styles.title_after_img }
          alt='' />
      </div>

      <ul className={ styles.advantage_list }>
        {
          advantageList.map(item => {
            return (
              <li
                className={ styles.advantage_item }
                key={ item.code }>
                <img
                  src={ item.img }
                  className={ styles.img }
                  alt='' />
                <div className={ styles.title }>{ item.title }</div>
                <div className={ styles.desc }>{ item.desc }</div>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default Advantage;
