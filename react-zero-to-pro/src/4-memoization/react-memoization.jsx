import React, { useState, useMemo, useCallback } from 'react';

const ItemList = () => {
  const [count, setCount] = useState(0);

  const expensiveComputation = () => {
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result;
  };

  const handleClick = () => {
    console.log('Button clicked!');
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      {items.map((item) => (
        <div key={item.id}>
          <p>Item: {item.name}</p>
          <button onClick={handleClick}>Do something</button>
          <p>Result: {expensiveComputation()}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

const items = [
  {
    id: 1,
    name: 'Idly',
  },
  {
    id: 2,
    name: 'Dosa',
  },
  {
    id: 3,
    name: 'Wada',
  },
  {
    id: 4,
    name: 'Upma',
  },
  {
    id: 5,
    name: 'Uthappa',
  },
  {
    id: 6,
    name: 'Masala Dosa',
  },
  {
    id: 7,
    name: 'Onion Utahapa',
  },
  {
    id: 8,
    name: 'Rava Dosa',
  },
  {
    id: 9,
    name: 'Gongura Utahapa',
  },
  {
    id: 10,
    name: 'Onion Dosa',
  },
  {
    id: 11,
    name: 'Kaaram Utahapa',
  },
];
