import React from 'react';
import ReactDom from 'react-dom';
import Icon from './icon/icon';

const App = () => (
  <div>
    <Icon name='browse'/>
    <Icon name='attachent'/>
  </div>
);

ReactDom.render(<App/>, document.querySelector('#root'));
