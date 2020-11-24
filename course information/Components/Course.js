import React from 'react';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>    
  )
}

const Course = ({ course }) => {
  return(
    <div>
      <Header course = {course}/>
      {course.parts.map(p => <li key={p.id}><Part part = {p}/></li>)}
      <b>total of {course.parts.reduce((a, b) => a + b.exercises, 0)} exercises</b>
    </div>
  )
}
  
export default Course