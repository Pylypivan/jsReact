import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './App';
import Button from './button';
import * as serviceWorker from './serviceWorker';

// function Greet(props) {

   
//     return (
//         <h1> hello, my name is  {props.name} im {props.year}   </h1>
//     )
// }

// function GreetAll() {
//     return (
//         <div>
//              <Greet name = 'ivan' year = '22'/>
//              <Greet name = 'bred' year = '23'/>
//              <Greet name = 'nik' year = '24'/>
//         </div>
//     )
// }


class App extends React.Component {
     render() {
             return(
                <div className = "wrapper"> 
                   <Clock />
                   <Button />
                </div>
             )
     }
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
