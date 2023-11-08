
const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({ part, exercises }) => {
  return (
    <p>{part} {exercises}</p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      { parts.forEach( element => {
          <Part part={element.name} exercises={element.exercises}/>
      })}
    </div>
  );
}

const Total = ({ parts }) => {
  const totalExercises = parts[0].exercises + parts[1].exercises + parts[2].exercises;
  return <p>Number of exercises {totalExercises}</p>;
};

const App = () => {
  
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}



export default App