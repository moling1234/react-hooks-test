import React, { useState } from 'react';

const Child = (props) => {
  console.log(props)
  const [inpVal, setImpVal] = useState(_ => props.val)


  return (
    <div>
      <input />
    </div>
  )
}

export default Child;