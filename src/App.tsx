import React from 'react';
import './App.scss';
import Button from './Button/Button';

const App = () => (
  <div className="container">
    <Button buttonName="Red" />
    <Button buttonName="Yellow" />
    <Button buttonName="blue" />
  </div>
);

export default App;
