import React, { useState } from 'react';

const Numbers = () => {
  const [numberArray, setNumberArray] = useState([1, 2, 3, 4])

  console.log('I am rendering')
  return (
    <div>
    {numberArray.map((n) => <>{n}</>)}
    <button onClick={() => setNumberArray(numberArray)}>Doesn't ReRender</button>
    <button onClick={() => setNumberArray([...numberArray])}>Does ReRender</button>
    </div>
  )
}

export default Numbers;

