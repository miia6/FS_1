const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({ part, exercises }) => {
  return (
    <p>{part} {exercises}</p>
  );
};

const Content = ({ content }) => {
  return (
    <div>
      { content.forEach( element => {
          <Part part={element.part} exercises={element.exercises}/>
      })}
    </div>
  );
}

const Total = ({ content }) => {
  const totalExercises = content[0].exercises + content[1].exercises + content[2].exercises;
  return <p>Number of exercises {totalExercises}</p>;
};

const App = () => {

  const course = 'Half Stack application development';
  const content = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7},
    { part: 'State of a component', exercises: 14}
  ];
  
  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total content={content} />
    </div>
  )

};

export default App