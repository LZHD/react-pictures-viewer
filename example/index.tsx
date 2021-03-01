import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PicturesViewer from '../.';

const App = () => {
  return (
    <div>
      <PicturesViewer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
