import React from 'react';
import ReactDom from 'react-dom'
import SocialApp from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(<SocialApp />, div);
    ReactDOM.unmountComponentAtNode(div)
})
