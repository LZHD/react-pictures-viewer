import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PicturesViewer from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PicturesViewer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
