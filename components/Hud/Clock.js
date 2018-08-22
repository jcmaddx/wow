import React from 'react';
let timer;

export default class extends React.Component {
	
	componentDidMount(){
		this._updateClock();
	}

	componentWillUnmount(){
		clearInterval(timer);
	}

	_updateClock = () => {
	  let today = new Date();
	  let hour = today.getHours();
	  let minute = today.getMinutes();
	  if (hour > 12) {
	    hour -= 12;
		} else if (hour === 0) {
		  hour = 12;
		}
	  minute = (minute < 10) ? "0" + minute : minute;
	  this.refs.hours.innerHTML = hour;
	  this.refs.minutes.innerHTML = minute;
	  timer = setTimeout(() => {
	  	this._updateClock();
	  }, 1000);
	}

	render () {
		return (
			<div className="clock">
				<span ref="hours" className="hours"></span>:<span ref="minutes" className="minutes"></span>
			</div>
		)
	}
}