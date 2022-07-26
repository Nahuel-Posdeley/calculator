import React, { useState } from 'react';
import './App.css';

function App() {
  const [theme ,setTheme] = useState('#22252d') 
  const [themeBtn ,setThemeBtn] = useState('white') 
  const [calc, setCalc] = useState('')
  const [result, setResult] = useState('')
  const ops = ['/', '*', '+', '-', '.'];
  
  const themeToggle = () => {
    theme === '#22252d' ? setTheme('#d8e6eb52') : setTheme('#22252d')
      themeBtn === 'white' ? setThemeBtn('black') : setThemeBtn('white')
  }
  const updateCalc = value => {
    if( ops.includes(value) && calc === '' || ops.includes(value) && ops.includes(calc.slice(-1))){
      return;
    }
    if(!ops.includes(value)){
      setResult(eval(calc + value).toString())
    }
    setCalc(calc + value)
  }

  const calculate = () => {
    setCalc(eval(calc).toString())
  }
  const deleteOne = () => {
    if(calc === ''){
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value)
  }
  const deleteAll = () => {
    if(calc === ''){
      return;
    }
    setCalc('')
    setResult('')
  }
  return (
    <div style={{
      backgroundColor: theme,
    }} className="container">
            <div className='dark'>
              <div className='container__radio'>
              <label className='label__radio' style={{color: themeBtn}}>☪</label>
              <input name='themecolor' id='black' type='radio' onChange={themeToggle} />
              </div>
              <div className='container__radio'>
              <input name='themecolor' id='white' type='radio' onChange={themeToggle} />
              <label className='label__radio' style={{color: themeBtn }}>☀</label>
              </div>
      </div>
        <div style={{
          backgroundColor: theme,
          border: '1px solid #d1d5d7'
        }} className="calculadora">
            <div className="display">
                {result ? <span style={{color: themeBtn}}>({result})</span> : '' }
                <div style={{color: themeBtn}} id="valor__actual">{calc || '0'}</div>
            </div>
            <button style={{color: themeBtn}} onClick={deleteAll} className="col-2">C</button>
            <button style={{color: themeBtn}} onClick={deleteOne} className="numero">&larr;</button>
            <button style={{color: themeBtn}} onClick={() => updateCalc('%') } className="operador">%</button>
            <button style={{color: themeBtn}} onClick={() => updateCalc('7') }className="numero">7</button>
            <button style={{color: themeBtn}} onClick={() => updateCalc('8') } className="numero">8</button>
            <button style={{color: themeBtn}} onClick={() => updateCalc('9') } className="numero">9</button>
            <button style={{color: themeBtn}} onClick={() => updateCalc('*') } className="operador">X</button>
            <button style={{color: themeBtn}} onClick={() => updateCalc('4') } className="numero">4</button>
            <button style={{color: themeBtn}} onClick={() => updateCalc('5') } className="numero">5</button>
            <button style={{color: themeBtn}} onClick={() => updateCalc('6') } className="numero">6</button>
            <button style={{color: themeBtn}} onClick={() => updateCalc('-') } className="operador">-</button>
            <button style={{color: themeBtn}} onClick={() => updateCalc('1') } className="numero">1</button>
            <button style={{color: themeBtn}} onClick={() => updateCalc('2') } className="numero">2</button>
            <button style={{color: themeBtn}} onClick={() => updateCalc('3') } className="numero">3</button>
            <button style={{color: themeBtn}} onClick={() => updateCalc('+') } className="operador">+</button>
            <button style={{color: themeBtn}} onClick={() => updateCalc('0') } className="col-2">0</button>
            <button style={{color: themeBtn}} onClick={() => updateCalc('.') } className="numero">.</button>
            <button style={{color: themeBtn}} onClick={calculate} className="operador">=</button>
        </div>
    </div>
  );
}

export default App;
