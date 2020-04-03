import React, { useContext } from 'react';
import Introduce from './components/Introduce';
import Advantage from './components/Advantage';
import CustomerFeedback from './components/CustomerFeedback';
import CustomerNumber from './components/CustomerNumber';

import wrapComponent from './wrapComponent';

import styles from './index.module.scss';

const IntroduceComp = wrapComponent(Introduce);
const AdvantageComp = wrapComponent(Advantage);
const CustomerFeedbackComp = wrapComponent(CustomerFeedback);
const CustomerNumberComp = wrapComponent(CustomerNumber);

const Main = ({ moveStyle, onVideoPlay }) => {

  return (
    <div className={ styles.main_list }>

      <IntroduceComp moveStyle={moveStyle}></IntroduceComp>

      <AdvantageComp moveStyle={moveStyle}></AdvantageComp>

      <CustomerFeedbackComp></CustomerFeedbackComp>

      <CustomerNumberComp></CustomerNumberComp>
    </div>
  );
};

export default Main;

