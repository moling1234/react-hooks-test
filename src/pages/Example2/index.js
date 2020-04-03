import React, { useState } from 'react';
import Child from './Child'

const Example2 = () => {
  const [val, setVal] = useState('moling')
  
  return (
    <div>
      <Child value={ val }></Child>
    </div>
  );
};

export default Example2;
