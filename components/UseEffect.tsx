import React, { useState, useEffect } from 'react';

// Explicitly typing the component as a React Functional Component (FC)
const Counter: React.FC = () => {
  // TypeScript infers 'number' here, but you can be explicit: useState<number>(0)
  const [count, setCount] = useState<number>(0);

  const decrementCount = (): void => {
    setCount((prevCount) => prevCount - 1);
  };

  const incrementCount = (): void => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(()=>{
      console.log('The count is', count);
      
  }, [count]);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-lg border border-gray-100 max-w-sm mx-auto mt-10">
      <h1 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">
        Current Count
      </h1>
      
      <div className="text-6xl font-black text-emerald-600 mb-8 tabular-nums">
        {count}
      </div>

      <div className="flex gap-4">
        <button
          onClick={decrementCount}
          className="w-14 h-14 flex items-center justify-center bg-gray-100 text-gray-700 text-2xl font-bold rounded-full hover:bg-gray-200 active:scale-95 transition-all shadow-sm"
          aria-label="Decrement"
        >
          −
        </button>

        <button
          onClick={incrementCount}
          className="w-14 h-14 flex items-center justify-center bg-emerald-600 text-white text-2xl font-bold rounded-full hover:bg-emerald-700 active:scale-95 transition-all shadow-md"
          aria-label="Increment"
        >
          +
        </button>
      </div>
      
      <button 
        onClick={() => setCount(0)}
        className="mt-6 text-xs text-gray-400 hover:text-red-500 transition-colors underline underline-offset-4"
      >
        Reset Counter
      </button>
    </div>
  );
};

export default Counter;