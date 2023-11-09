import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    setTotal(total + 1);
    setAll(allClicks.concat('G'));
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setTotal(total + 0);
    setAll(allClicks.concat('N'));
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    setTotal(total - 1);
    setAll(allClicks.concat('B'));
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {allClicks.length}</p>
      <p>average {total/allClicks.length}</p>
      <p>positive {good*100/allClicks.length}</p>
    </div>
  )
};

export default App