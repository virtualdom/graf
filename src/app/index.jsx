const React = require('react');
const { render } = require('react-dom');

const RouterComponent = require('./router/index.jsx');

render(<RouterComponent />, document.getElementById('app'));
