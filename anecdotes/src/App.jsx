import { useState } from "react";

function App() {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([2, 5, 1, 3, 7, 6, 8, 4]);

  let mostVotes = Math.max(...votes);
  let indexOfMostVotes = votes.indexOf(mostVotes);

  const handleRandomAnecdote = () => {
    const randomAnecdote = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomAnecdote);
  };

  const handleVote = () => {
    const updatedVotes = [...votes];
    updatedVotes[selected] += 1;
    setVotes(updatedVotes);
  };

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>

        <div>
          <button onClick={handleVote}>vote</button>
          <button onClick={handleRandomAnecdote}>next anectdote</button>
        </div>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        <p>{anecdotes[indexOfMostVotes]}</p>
        <p>has {votes[indexOfMostVotes]}</p>
      </div>
    </div>
  );
}

export default App;
