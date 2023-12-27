import React, { useEffect, useRef } from 'react';
let timer;

const Clock = () => {
	const hourRef = useRef()
	const minuteRef = useRef()
	useEffect(() => {
		_updateClock();
		return () => clearInterval(timer);
	}, [])

	const _updateClock = () => {
	  let today = new Date();
	  let hour = today.getHours();
	  let minute = today.getMinutes();
	  if (hour > 12) {
	    hour -= 12;
		} else if (hour === 0) {
		  hour = 12;
		}
	  minute = (minute < 10) ? "0" + minute : minute;
	  hourRef.current.innerHTML = hour;
	  minuteRef.current.innerHTML = minute;
	  timer = setTimeout(() => {
	  	_updateClock();
	  }, 1000);
	}

	return (
		<div className="clock">
			<span ref={hourRef} className="hours"></span>:<span ref={minuteRef} className="minutes"></span>
		</div>
	)
}

export default Clock