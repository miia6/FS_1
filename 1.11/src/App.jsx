import { useState } from 'react';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

const Statistics = (props) => {

  if ( props.allClicks.length > 0 ) {
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
        <StatisticLine text='good' value={g} />
        <StatisticLine text='neutral' value={n} />
        <StatisticLine text='bad' value={b} />
        <StatisticLine text='all' value={props.allClicks.length} />
        <StatisticLine text='average' value={t/props.allClicks.length} />
        <StatisticLine text='positive' value={g*100/props.allClicks.length} />
      </div>
    );

  } else {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }

};

const StatisticLine = ({ text, value }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td> 
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
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
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics allClicks={allClicks} />
    </div>
  )
};

export default App