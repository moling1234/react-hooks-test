import React, { Component } from 'react';
import Tooltip from '@ifchange-eui/tooltip';
import throttle from 'lodash/throttle';
import Meiqia from './Meiqia';

import './index.scss';

const messageIcon = require('./assets/messageIcon.svg');
const phoneIcon = require('./assets/phoneIcon.svg');
const writeIcon = require('./assets/writeIcon.svg');
const right = require('./assets/right.svg');
const zxsy = require('./assets/zxsy.svg');

class Contain extends Component {
  render() {
    return (
      <div className="hover-container">
        <div
          className="services"
          id="online-service"
          onClick={() => {
            window._MEIQIA('showPanel');
          }}
          target="_blank">
          <img alt="" className="icon" src={messageIcon} />
          <div className="title">
            在线客服
            <img alt="" src={right} />
          </div>
          <div className="description">工作时间 9:00-18:00</div>
        </div>
        <div className="services-phone">
          <img alt="" className="icon" src={phoneIcon} />
          <div className="title">售前咨询</div>
          <div className="sub-title">400-921-7035</div>
          <div className="description">工作时间 9:00-18:00</div>
        </div>
        <div className="register" onClick={this.props.onRegistryClick}>
          <img alt="" className="icon" src={writeIcon} />
          <div className="title">
            申请试用
            <img alt="" src={right} />
          </div>
          <div className="description">请填写简短信息,我们会尽快与您联系</div>
        </div>
      </div>
    );
  }
}

export default class FixedBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBackTop: false
    };

    this.handleScroll = throttle(this.handleScroll.bind(this), 50);
    this.onScroll = this.onScroll.bind(this);
    this.ticking = false;
  }

  componentDidMount() {
    setTimeout(() => {
      document.querySelector('.login-fixed-bar').className =
        'login-fixed-bar show';
    }, 400);
  }

  componentWillMount() {
    window.addEventListener('scroll', this.onScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll() {
    if (!this.ticking && window.requestAnimationFrame) {
      window.requestAnimationFrame(this.handleScroll);
      this.ticking = true;
    } else {
      this.handleScroll();
    }
  }

  handleScroll() {
    let scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (scrollTop > 800) {
      this.setState({
        showBackTop: true
      });
    } else {
      this.setState({
        showBackTop: false
      });
    }
    this.ticking = false;
  }
  render() {
    return (
      <div className={'login-fixed-bar'}>
        <div className="contact-block">
          <Tooltip
            overlayClassName="fixed-bar-tooltip"
            placement="leftTop"
            title={<Contain onRegistryClick={this.props.onRegistryClick} />}>
            <img alt="" src={zxsy} />
          </Tooltip>
        </div>
        {this.state.showBackTop ? (
          <div
            className="back-top"
            onClick={() => {
              window.scrollTo(0, 0);
            }}></div>
        ) : null}
        <Meiqia account={window.ACCOUNT} />
      </div>
    );
  }
}

FixedBar.defaultProps = {
  onRegistryClick: () => {}
};
