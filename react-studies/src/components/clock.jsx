import React from 'react'


class Clock extends React.Component {
    constructor(props) {
        super();
        this.launchClock()
        this.state = {
            currentTime: (new Date()).toLocaleString()
        }
    }

    launchClock() {
        setInterval(this.setState({currentTime: (new Date()).toLocaleString()}), 1000)
    }

    render() {
        <div>{this.state.currentTime}</div>
    }
}

export Clock by default;