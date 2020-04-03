import React from 'react';
import './index.scss';

const Footer = props => {
  const { registryTitle, className, showRegistry, onRegistryClick } = props;

  return (
    <div className={`homepage-footer ${className}`}>
      {
        showRegistry ? (
          <div className="footer-registry">
            <div className="footer-registry__title">{registryTitle}</div>
            <div className="footer-registry__btn" onClick={onRegistryClick}>
              申请试用
            </div>
          </div>
        ) : null
      }

      <div className="footer-wrapper">
        <div className="footer-content">
          <span>
            <a target="_blank" rel="noopener noreferrer" href="/">
              e成动态
            </a>
          </span>
          <span>
            <a target="_blank" rel="noopener noreferrer" href="/">
              关于我们
            </a>
          </span>
          <span>
            <a target="_blank" rel="noopener noreferrer" href="/">
              联系我们
            </a>
          </span>
          <span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://hr.ifchange.com/">
              加入我们
            </a>
          </span>
        </div>
        <div className="footer-copy-right">
          上海逸橙信息科技有限公司 Copyright © 2012 - 2019沪ICP备12043691号-1
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010102002040"
            target="_blank"
            rel="noopener noreferrer">
            沪公网安备 31010102002040 号
          </a>
        </div>
      </div>
    </div>
  );
};

Footer.defaultProps = {
  registryTitle: '即刻体验人力资本数字化平台',
  className: '',
  showRegistry: true,
  onRegistryClick: () => {}
};

export default Footer;
