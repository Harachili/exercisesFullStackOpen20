import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => <button onClick={props.handleClick}> {props.text} </button>

const Statistics = (props) => <div>{props.text} {props.value}{props.two}</div>

const App = () => {
  
  const [good, setGood]         = useState(0)
  const [neutral, setNeutral]   = useState(0)
  const [bad, setBad]           = useState(0)
  if (good + neutral + bad === 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text='good'/>
        <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/> 
        <Button handleClick={() => setBad(bad + 1)} text='bad'/> 
  
        <h1>statistics</h1>
        <Statistics text = "No feedback given"/>
      </div>
    )
  } 
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/> 
      <Button handleClick={() => setBad(bad + 1)} text='bad'/> 

      <h1>statistics</h1>
      <table>
          <tbody>
          <tr>
            <td><Statistics text = "good"/></td>
            <td><Statistics value = {good}/></td>
          </tr>
          <tr>
            <td><Statistics text = "neutral"/></td>
            <td><Statistics value = {neutral}/></td>
          </tr>
          <tr>
            <td><Statistics text = "bad"/></td>
            <td><Statistics value = {bad}/></td>
          </tr>
          <tr>
            <td><Statistics text = "all"/></td>
            <td><Statistics value = {bad+good+neutral}/></td>
          </tr>
          <tr>
            <td><Statistics text = "average"/></td>
            <td><Statistics value = {(bad+good+neutral) === 0 ? 0 : (good-bad) / (bad+good+neutral)}/></td>
          </tr>
          <tr>
            <td><Statistics text = "positive"/></td>
            <td><Statistics value = {(bad+good+neutral) === 0 ? 0 : good*100 / (bad+good+neutral)} two = "%"/></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)