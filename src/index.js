import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import  {ContextProvider} from './contextAPI/Context.js';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ContextProvider>
					<App />
				</ContextProvider>, 
				document.getElementById('root'));


//import * as serviceWorker from './serviceWorker';
 
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);


//serviceWorker.unregister();
