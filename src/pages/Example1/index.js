import React, { useState } from 'react';
import Drawer from '@ifchange-eui/drawer';

const Example1 = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true)
  };

  const hideDrawer = () => {
    setVisible(false)
  };

  return (
    <div>
      <button onClick={ showDrawer }>click</button>

      <Drawer
        placement="right"
        width={ 881 }
        markClosable={ false }
        mask={ false }
        onClose={ hideDrawer }
        visible={ visible }
        closable={ false }
      >
      </Drawer>
    </div>
  );
};

export default Example1;