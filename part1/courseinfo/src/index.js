import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  const array = props.parts;
  return (
    <div>
      <Part part={array[0].name} exercises={array[0].exercises}/>
      <Part part={array[1].name} exercises={array[1].exercises}/>
      <Part part={array[2].name} exercises={array[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  const array = props.parts;
  let total = array[0].exercises + array[1].exercises + array[2].exercises;
  return (
    <p>Number of exercises {total} </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
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
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))