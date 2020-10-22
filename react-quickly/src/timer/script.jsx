import React from 'react'

/*Breaking up the components allows for adaptation incase of new releases
on React. Aside from reusability, keeping representation and logic seperate
is considered best practice when working with React */


class TimerWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timeLeft: null,
            timer: 0
        }
    }

    /* for this function this time I used arrow function to autobind this
    method*/
    startTimer = (timeLeft) => {
        clearInterval(this.state.timer)
        let timer = setInterval(() => {
            var timeLeft = this.state.timeLeft - 1
            if (timeLeft == 0) clearInterval(timer)
            this.setState({timeLeft: timeLeft})
        }, 1000)
        return this.state({timeLeft: timeLeft, timer: timer})
    }
    render() {
        return (
            <div className="row-fluid">
                <div className="btn-group" role="group">
                    <Button time="5" startTimer={this.startTimer}/>
                    <Button time="10" startTimer={this.startTimer}/>
                    <Button time="15" startTimer={this.startTimer}/>
                </div>
            </div>
        )
    }
}


class Timer extends React.Component {
    render() {

    }
}


class Button extends React.Component {
    startTimer(event) {

    }
    render() {

    }
}

export {TimerWrapper}