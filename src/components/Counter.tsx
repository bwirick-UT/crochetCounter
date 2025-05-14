import { useState, useEffect } from 'react';
import './Counter.css';

interface CounterProps {
  title: string;
  initialValue?: number;
}

const Counter = ({ title, initialValue = 0 }: CounterProps) => {
  const [count, setCount] = useState(initialValue);
  const [isAnimating, setIsAnimating] = useState('');

  // Save counter value to localStorage
  useEffect(() => {
    const savedValue = localStorage.getItem(`counter-${title.toLowerCase()}`);
    if (savedValue) {
      setCount(parseInt(savedValue, 10));
    }
  }, [title]);

  // Update localStorage when count changes
  useEffect(() => {
    localStorage.setItem(`counter-${title.toLowerCase()}`, count.toString());
  }, [count, title]);

  const increment = () => {
    setCount(prev => prev + 1);
    setIsAnimating('increment');
    setTimeout(() => setIsAnimating(''), 150);
  };

  const decrement = () => {
    setCount(prev => (prev > 0 ? prev - 1 : 0));
    if (count > 0) {
      setIsAnimating('decrement');
      setTimeout(() => setIsAnimating(''), 150);
    }
  };

  const reset = () => {
    setCount(0);
    setIsAnimating('reset');
    setTimeout(() => setIsAnimating(''), 150);
  };

  return (
    <div className="counter">
      <h2 className="counter-title">{title}</h2>
      <div className={`counter-display ${isAnimating}`}>{count}</div>
      <div className="counter-buttons">
        <button
          className="counter-button increment"
          onClick={increment}
          aria-label={`Increase ${title}`}
        >
          +
        </button>
        <button
          className="counter-button decrement"
          onClick={decrement}
          aria-label={`Decrease ${title}`}
          disabled={count === 0}
        >
          -
        </button>
      </div>
      <button
        className="reset-button"
        onClick={reset}
        aria-label={`Reset ${title} counter`}
        disabled={count === 0}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
