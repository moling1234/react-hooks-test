import React, { Fragment, useState } from 'react';
import Button from '@ifchange-eui/button';
import Drawer from '@ifchange-eui/drawer';

import CandidateMainInfo from './components/CandidateMainInfo';
import ResumeList from './components/ResumeList'

const ResumeCandidate = () => {
  const [visibleCandidate, setVisibleCandidate] = useState(false);

  const showCandidate = () => {
    setVisibleCandidate(true);
  };

  const hideCandidate = () => {
    setVisibleCandidate(false);
  };

  return (
    <Fragment>
      <Button onClick={ showCandidate }>简历</Button>
    
      <Drawer
        placement="right"
        title="候选人简历"
        width={ 881 }
        markClosable={ false }
        mask={ false }
        onClose={ hideCandidate }
        visible={ visibleCandidate }
      >
        <CandidateMainInfo>
        </CandidateMainInfo>

        <ResumeList>
        </ResumeList>
      </Drawer>
    </Fragment>
  );
};

export default ResumeCandidate;