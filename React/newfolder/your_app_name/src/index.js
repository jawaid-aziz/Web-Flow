import React from 'react';
import ReactDOM from 'react-dom/client';

const MyCompo = () => {
  const name = "Javaid Memon";
  const x = '6' + '9';
  return <h1>Hello {name}, {x}</h1>
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyCompo></MyCompo>);

