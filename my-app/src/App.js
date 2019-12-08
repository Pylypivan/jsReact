import React from 'react';
import logo from './logo.svg';
import './App.css';




function ShowBanner(props) {
    if (props.time > 45) {
        return (
              <div className = "rest_block">Відпочинок</div>
        )
    } else {
      return (
        <div className = "rest_work">Робота</div>
  )
    }
}


class Clock extends React.Component {
   constructor(props) {
     super(props);
     this.state = {date: new Date()}
   }

   componentDidMount() {
     this.timerId = setInterval(
       () => this.tick(),
       1000
     )
   }

   componentWillUnmount() {
     clearInterval(this.timerId)
   }

   tick() {
     this.setState({
       date:new Date()
     })
   }

   render() {
          return(
            <div>
              <ShowBanner time = {this.state.date.getSeconds()} />
               <h1> час {this.state.date.toLocaleTimeString()} </h1>
            </div>
          )
   }
}

export default Clock;
