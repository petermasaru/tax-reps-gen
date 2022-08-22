import './App.css';

import { LetterGenerator } from './letterGenerator'

function App() {
  return (
    <div>
      <h1 style={{ marginLeft: '2rem' }}>Tax Reps Generator v3</h1>
      <p style={{ marginLeft: '2.5rem' }}><i>Please consult with the Tax Team before using this tool; it is still in beta.</i></p><br></br>
      <div className='generator'>{LetterGenerator()}</div>
    </div>
  )
}

export default App;
