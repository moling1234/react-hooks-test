import React from 'react';
import styles from './index.module.scss';

const companyList = [
  { code: 0, companyName: '重庆万友人力',companyDesc: '小e外呼上线后，我们单日的外呼量提升到了500左右，邀约效率远超人工，很快把积压的简历呼了出去，大幅提升了我们的工作效率。', companyLogo: require('@/assets/introduce_customer_logo-1.png') },
  { code: 1, companyName: '重庆万友人力',companyDesc: '小e外呼上线后，我们单日的外呼量提升到了500左右，邀约效率远超人工，很快把积压的简历呼了出去，大幅提升了我们的工作效率。', companyLogo: require('@/assets/introduce_customer_logo-1.png') },
  { code: 2, companyName: '重庆万友人力',companyDesc: '小e外呼上线后，我们单日的外呼量提升到了500左右，邀约效率远超人工，很快把积压的简历呼了出去，大幅提升了我们的工作效率。', companyLogo: require('@/assets/introduce_customer_logo-1.png') },
  { code: 3, companyName: '重庆万友人力',companyDesc: '小e外呼上线后，我们单日的外呼量提升到了500左右，邀约效率远超人工，很快把积压的简历呼了出去，大幅提升了我们的工作效率。', companyLogo: require('@/assets/introduce_customer_logo-1.png') },
  { code: 4, companyName: '重庆万友人力',companyDesc: '小e外呼上线后，我们单日的外呼量提升到了500左右，邀约效率远超人工，很快把积压的简历呼了出去，大幅提升了我们的工作效率。', companyLogo: require('@/assets/introduce_customer_logo-1.png') },
  { code: 5, companyName: '重庆万友人力',companyDesc: '小e外呼上线后，我们单日的外呼量提升到了500左右，邀约效率远超人工，很快把积压的简历呼了出去，大幅提升了我们的工作效率。', companyLogo: require('@/assets/introduce_customer_logo-1.png') }
];

const introduceCustomerTitleAfterPng = require('@/assets/introduce_customer_title_after.png');

const CustomerFeedback = () => {
  return (
    <div className={ styles.customer_feedback }>
      <div className={ styles.customer_content }>
        <div className={ styles.customer_title }>
          <p className={ styles.text }>来自客户的肯定</p>
          
          <img
            src={ introduceCustomerTitleAfterPng }
            className={ styles.title_after_img }
            alt='' />
        </div>

        <ul className={ styles.company_list }>
          {
            companyList.map(item => {
              return (
                <li
                  className={ styles.company_item }
                  key={ item.code }>
                  
                  <div className={ styles.company_name }>{ item.companyName }</div>
                  <div className={ styles.company_desc }>{ item.companyDesc }</div>

                  <img
                    src={ item.companyLogo }
                    className={ styles.company_logo }
                    alt='' />
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default CustomerFeedback;
