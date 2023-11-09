import { useState } from 'react';

const Statistics = (props) => {

  let g = 0;
  let n = 0;
  let b = 0;
  let t = 0;

  props.allClicks.forEach( click => {
    if ( click === 'G' ) {
      g += 1;
      t += 1;
    } else if ( click === 'N' ) {
      n += 1;
    } else {
      b += 1;
      t -= 1;
    }
  });

  return (
    <div>
      <h1>statistics</h1>
      <p>good {g}</p>
      <p>neutral {n}</p>
      <p>bad {b}</p>
      <p>all {props.allClicks.length}</p>
      <p>average {t/props.allClicks.length}</p>
      <p>positive {g*100/props.allClicks.length}</p>
    </div>
  );
};

const App = () => {

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
      <Statistics allClicks={allClicks} />
    </div>
  )
};

export default App