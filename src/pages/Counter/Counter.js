import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [scores, setScores] = useState([]);
  return (
    <>
      <article>
        <h1>Counter</h1>
        <button onClick={() => setCounter((p) => p + 1)}>+1</button>
        <input type="text" readOnly value={counter} />
        <button onClick={() => setCounter((p) => p - 1)}>-1</button>
        <button
          onClick={() => setScores((prevScores) => [...prevScores, counter])}
        >
          Save score
        </button>
        <button>Reset counter value</button>
      </article>
      <article>
        {scores.length === 0 ? (
          <p>No scores yet</p>
        ) : (
          <ul>
            {scores.map((score, index) => (
              <li key={index}>{score}</li>
            ))}
          </ul>
        )}
      </article>
    </>
  );
};
