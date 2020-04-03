import React from 'react';
import styles from './index.module.scss';

let companyList = [
  { code: 0, companyName: '重庆万友人力',companyDesc: '小e外呼上线后，我们单日的外呼量提升到了500左右，邀约效率远超人工，很快把积压的简历呼了出去，大幅提升了我们的工作效率。', companyLogo: require('@/assets/introduce_customer_logo-1.png') },
];

for(let i = 0; i < 10; i++) {
  companyList.push({
    ...companyList[0],
    code: i + 1
  })
}

const CustomerNumber = () => {
  return (
    <div className={ styles.customer_number }>
      <div className={ styles.customer_content }>
        <div className={ styles.customer_title }>
          我们正在为超过5000家企业提供服务
        </div>

        <ul className={ styles.company_list }>
          {
            companyList.map(item => {
              return (
                <li
                  className={ styles.company_item }
                  key={ item.code }>
                  <img
                    src={ item.companyLogo }
                    className={ styles.company_logo }
                    alt=""/>
              </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default CustomerNumber;
