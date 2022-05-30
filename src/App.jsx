import React, { useState } from 'react';
import words from 'lodash.words';
import './App.css'
import Result from './components/Result.jsx';
import Numbers from './components/Numbers.jsx'
import Functions from './components/Functions.jsx'
import MathOperations from './components/MathOperations';
const App = () => {
  const [result, setResult] = useState('');

  const items = words(result, /[^-^+^*^/]+/g);
  const value = items.length > 0 ? items[items.length-1] : 0;
  return (
    <main className="react-calculator">
      <Result value={`${value}`}/>
      <Numbers
        onClickNumber={(number) => setResult(`${result}${number}`)}
      />
      <Functions
        onDelete={() => {
          if (result.length === 0) return;
          const newResult = result.substring(0, result.length - 1);
          setResult(newResult);
        }}
        onContentClear={() => setResult('')}
      />
      <MathOperations
        onClickOperation={(operation) => setResult(`${result}${operation}`)}
        // eslint-disable-next-line
        onClickEqual={() => setResult(eval(result))}
      />
    </main>
  );
}

export default App;