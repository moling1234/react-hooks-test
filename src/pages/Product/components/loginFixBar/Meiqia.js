import './index.scss';
import { Component } from 'react';

export default class Meiqia extends Component {
  constructor(...args) {
    super(...args);

    this.setMetadata = this.setMetadata.bind(this);
    this.getMetadataFromAccount = this.getMetadataFromAccount.bind(this);
  }

  setMetadata(data) {
    if (this.meiqia) {
      let MEIQIA = this.meiqia;

      MEIQIA('metadata', data);
    }
  }

  getMetadataFromAccount(account) {
    if (!account) {
      return {};
    }

    return {
      uid: account.uid,
      corpName: account.name,
      shortName: account.shortName,
      parentId: account.parentId,
      email: account.email,
      contactPhone: account.contactPhone,
      contactMobile: account.contactMobile,
      contactName: account.contactName
    };
  }

  componentDidMount() {
    (function(m, ei, q, i, a, j, s) {
      m[i] =
        m[i] ||
        function() {
          (m[i].a = m[i].a || []).push(arguments);
        };
      j = ei.createElement(q);
      s = ei.getElementsByTagName(q)[0];
      j.async = true;
      j.charset = 'UTF-8';
      j.src = 'https://static.meiqia.com/dist/meiqia.js?_=t';
      s.parentNode.insertBefore(j, s);
    })(window, document, 'script', '_MEIQIA');
    let MEIQIA = (this.meiqia = window._MEIQIA);
    window._MEIQIA('entId', 113599);
    window._MEIQIA('withoutBtn');
    MEIQIA('manualInit');
    MEIQIA('init');

    // (function (m, ei, q, i, a, j, s) {
    //   m[i] = m[i] || function () {
    //     (m[i].a = m[i].a || []).push(arguments)
    //   };
    //   j = ei.createElement(q),
    //     s = ei.getElementsByTagName(q)[0];
    //   j.async = true;
    //   j.charset = 'UTF-8';
    //   j.src = 'https://static.meiqia.com/dist/meiqia.js?_=t';
    //   s.parentNode.insertBefore(j, s);
    // }(window, document, 'script', '_MEIQIA'));
    // let MEIQIA = this.meiqia = window._MEIQIA;
    // MEIQIA('entId', 113599);

    // MEIQIA('withoutBtn'); //不使用美洽的按钮
    // this.setMetadata(this.getMetadataFromAccount(
    //   // this.props.account
    // ));
    // // 在这里开启手动模式（必须紧跟美洽的嵌入代码）
    // MEIQIA('manualInit');
    // MEIQIA('init');
  }

  componentWillReceiveProps(nextProps) {
    let newAccountInfo = nextProps.account;
    let oldAccountInfo = this.props.account;

    if (newAccountInfo && newAccountInfo !== oldAccountInfo) {
      this.setMetadata(this.getMetadataFromAccount(newAccountInfo));
    }
  }

  render() {
    return null;
  }
}
