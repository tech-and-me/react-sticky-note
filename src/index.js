// require('file-loader?name=[name].[ext]!./index.html');

import ReactDOM from 'react-dom';
import App from './App';
import './App.css';

const appElement = document.getElementById('app');

ReactDOM.render(<App />, appElement);
