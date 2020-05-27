import React from 'react';
import ReactDom from 'react-dom';
import Icon from './icon/icon';

const App = () => {
  const fn: React.MouseEventHandler = (e) => {
    console.log(e);
  };
  return (
    <div>
      <Icon name='browse' onClick={fn}/>
      <Icon name='attachent' className={'aaa'}/>
    </div>
  );
};

ReactDom.render(<App/>, document.querySelector('#root'));
