import { useState } from "react";

const Statistics = (props) => {
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {props.average}</p>
      <p>positive {props.positive}%</p>
    </div>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  const handleGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
  };

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
  };

  const handleBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
  };

  return (
    <>
      <div>
        <h1>Give feedback</h1>

        <div>
          <button onClick={handleGood}>good</button>
          <button onClick={handleNeutral}>neutral</button>
          <button onClick={handleBad}>bad</button>
        </div>
      </div>

      <div>
        <h2>Statistics</h2>

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          average={average}
          positive={positive}
        />
      </div>
    </>
  );
}

export default App;
