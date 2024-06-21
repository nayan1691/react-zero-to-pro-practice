import { useEffect, useState } from 'react';

const AddLikeButton = ({ handleClick }) => {
  return <button onClick={handleClick}>Like</button>;
};

export const DisLikeButton = ({ handleClick }) => {
  return <button onClick={handleClick}>DisLike</button>;
};

export const ResetButton = ({ handleClick }) => {
  return <button onClick={handleClick}>Reset</button>;
};

const Display = () => {
  const [counter, setCounter] = useState(0);

  // This will create infinite loop
  useEffect(() => {
    // Consider counter is coming from backend
    // The value here is 0 but it can be anything
    // in real time approach
    setCounter(counter + 10);
  }, [counter]);

  return (
    <div>
      <p>Like Counts</p>
      <h2>{counter}</h2>
      <AddLikeButton
        handleClick={() => {
          setCounter(counter + 1);
        }}
      />
      <ResetButton
        handleClick={() => {
          setCounter(0);
        }}
      />
      <DisLikeButton
        handleClick={() => {
          setCounter(counter - 1);
        }}
      />
    </div>
  );
};

export default Display;
