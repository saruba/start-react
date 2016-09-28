import React from 'react';
import ReactDom from 'react-dom';

const HelloWorld = () => {
  return <div>
    Hello World
  </div>
}

ReactDom.render(
  React.createElement(HelloWorld, null),
  document.getElementById('app')
)
