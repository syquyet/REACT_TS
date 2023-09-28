import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <>
  <header>
    <h1>session 02 -tabe- module 01- ngay 01/08/2023</h1>
  </header>
  <main>
    <section>
      <h3>vi du the table</h3>
      <table border={1}>
        <tbody>
          <tr>
            <th>cot 1</th>
            <th>cot 2</th>
            <th>cot 3</th>
          </tr>
          <tr>
            <td>cot 1</td>
            <td>cot 2</td>
            <td>cot 3</td>
          </tr>
        </tbody>
      </table>
      <table border={1}>
        <tbody>
          <tr>
            <th>1.1</th>
            <th colSpan={2}>1.2</th>
            <th>1.3</th>
          </tr>
          <tr>
            <td rowSpan={3}>2.1 3.1 4.1</td>
            <td>2.2</td>
            <td>2.3</td>
          </tr>
          <tr>
            <td>3.1</td>
            <td>3.2</td>
            <td>3.3</td>
          </tr>
          <tr>
            <td>4.1</td>
            <td>4.2</td>
            <td>4.3</td>
          </tr>
        </tbody>
        <caption>bang 1</caption>
      </table>
    </section>
    <section>
      <h3>cac the cua table</h3>
      <p>the capsion mo ta bang</p>
      <p>the thead phaan chia phaan ddau</p>
      <p>the tbody</p>
      <p>the tfoot</p>
    </section>
    <section>
      <h3>vi du cac the tabe thead tbody tfoot</h3>
      <table>
        <tbody />
        <thead>
          <tr>
            <th>mon</th>
            <th>tue</th>
            <th>wue</th>
            <th>thu</th>
            <th>sat</th>
            <th>sun</th>
          </tr>
        </thead>
      </table>
    </section>
    <section>
      <h3>mot so the moi HTML5</h3>
      <p>thien trinh lam viec</p>
      <div>
        <progress max={100} value={80} /> <span>80%</span>
      </div>
      <progress max={100} value={80} /> <span>80%</span>
    </section>
    
  </main>
</>

    </div>
  );
}

export default App;
