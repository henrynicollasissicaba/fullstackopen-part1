# Fullstack Open Exercises Solutions - Part1

## 1.1: course information step 1

The application that we will start working on in this exercise will be further developed in a few of the following exercises. In this and other upcoming exercise sets in this course, it is enough to only submit the final state of the application. If desired, you may also create a commit for each exercise of the series, but this is entirely optional.

Use Vite to initialize a new application. Modify main.jsx to match the following

```javascript
import ReactDOM from "react-dom/client";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

and App.jsx to match the following

```javascript
const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
};

export default App;
```

and remove the extra files App.css and index.css, also remove the directory assets.

Unfortunately, the entire application is in the same component. Refactor the code so that it consists of three new components: Header, Content, and Total. All data still resides in the App component, which passes the necessary data to each component using props. Header takes care of rendering the name of the course, Content renders the parts and their number of exercises and Total renders the total number of exercises.

Define the new components in the file App.jsx.

The App component's body will approximately be as follows:

```javascript
const App = () => {
  // const-definitions

  return (
    <div>
      <Header course={course} />
      <Content ... />
      <Total ... />
    </div>
  )
}
```

## 1.2: course information step 2

Refactor the Content component so that it does not render any names of parts or their number of exercises by itself. Instead, it only renders three Part components of which each renders the name and number of exercises of one part.

```javascript
const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}
```

## 1.3: course information step 3

Let's move forward to using objects in our application. Modify the variable definitions of the App component as follows and also refactor the application so that it still works:

```javascript
const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return <div>...</div>;
};
```

## 1.4: course information step 4

Place the objects into an array. Modify the variable definitions of App into the following form and modify the other parts of the application accordingly:

```javascript
const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return <div>...</div>;
};
```

However, do not pass different objects as separate props from the App component to the components Content and Total. Instead, pass them directly as an array:

```javascript
const App = () => {
  // const definitions

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};
```

## 1.5: course information step 5

Let's take the changes one step further. Change the course and its parts into a single JavaScript object. Fix everything that breaks.

```javascript
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return <div>...</div>;
};
```

## 1.6: unicafe step 1

Like most companies, the student restaurant of the University of Helsinki Unicafe collects feedback from its customers. Your task is to implement a web application for collecting customer feedback. There are only three options for feedback: good, neutral, and bad.

The application must display the total number of collected feedback for each category. Your final application could look like this:
![unicafe-img-step1](https://fullstackopen.com/static/d4fe767d6d8eb46f1dd21334f5f9e46e/5a190/13e.png)

## 1.7: unicafe step 2

Expand your application so that it shows more statistics about the gathered feedback: the total number of collected feedback, the average score (the feedback values are: good 1, neutral 0, bad -1) and the percentage of positive feedback.

![unicafe-img-step2](https://fullstackopen.com/static/0a5d15ae9f055a15cb469b9c9223df41/5a190/14e.png)

## 1.8: unicafe step 3

Refactor your application so that displaying the statistics is extracted into its own Statistics component. The state of the application should remain in the App root component.

## 1.9: unicafe step 4

Change your application to display statistics only once feedback has been gathered.

![unicafe-img-step4](https://fullstackopen.com/static/b453d7533ae85dcaf3eccf342a353c58/5a190/15e.png)

## 1.10: unicafe step 5

Let's continue refactoring the application. Extract the following two components:

- Button handles the functionality of each feedback submission button.
- StatisticLine for displaying a single statistic, e.g. the average score.

## 1.11: unicafe step 6

Display the statistics in an HTML table, so that your application looks roughly like this:

![unicafe-img-step6](https://fullstackopen.com/static/a74acccc17aafb02b3801ffa1fcc0fdc/5a190/16e.png)

## 1.12: anecdotes step 1

The world of software engineering is filled with anecdotes that distill timeless truths from our field into short one-liners.

Expand the following application by adding a button that can be clicked to display a random anecdote from the field of software engineering:

```javascript
import { useState } from "react";

const App = () => {
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

  return <div>{anecdotes[selected]}</div>;
};

export default App;
```

Your finished application could look something like this:
![anecdotes-img-step1](https://fullstackopen.com/static/8577fa00fc4d946e2322de9b2707c89c/5a190/18a.png)

## 1.13: anecdotes step 2

Expand your application so that you can vote for the displayed anecdote.
![anecdotes-img-step2](https://fullstackopen.com/static/06f95cb43a18bd6429174200a8d17cff/5a190/19a.png)

## 1.14: anecdotes step 3

Now implement the final version of the application that displays the anecdote with the largest number of votes:
![anecdotes-img-step3](https://fullstackopen.com/static/3e8638efbbbbcabac7bb79466ab3a5f6/5a190/20a.png)

If multiple anecdotes are tied for first place it is sufficient to just show one of them.
