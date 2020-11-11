import React from 'react'

/*Breaking up the components allows for adaptation incase of new releases
on React. Aside from reusability, keeping representation and logic seperate
is considered best practice when working with React */


class TimerWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timeLeft: null,
            timer: null
        }
    }

    /* for this function this time I used arrow function to autobind this
    method*/
    startTimer = (timeLeft) => {
        clearInterval(this.state.timer)
        let timer = setInterval(() => {
            var timeLeft = this.state.timeLeft - 1
            if (timeLeft === 0) clearInterval(timer)
            this.setState({timeLeft: timeLeft})
        }, 1000)
        return this.setState({timeLeft: timeLeft, timer: timer})
    }
    render() {
        return (
            <div className="row-fluid">
                <div className="btn-group" role="group">
                    <Button time="5" startTimer={this.startTimer}/>
                    <Button time="10" startTimer={this.startTimer}/>
                    <Button time="15" startTimer={this.startTimer}/>
                </div>
                <Timer timeLeft={this.state.timeLeft}/>
                <audio id="audios" src="creativeminds.mp3"></audio>
            </div>
        )
    }
}


class Timer extends React.Component {
    render() {
        if (this.props.timeLeft === 0){
            document.getElementById('audios').play()
        }
        if (this.props.timeLeft === null || this.props.timeLeft === 0) 
            return <div/>
        return <h1>Time Left: {this.props.timeLeft}</h1>
    }
}


class Button extends React.Component {
    render() {
        return (
            <button type="button" className='btn btn-secondary'
                onClick={() => {this.props.startTimer(this.props.time)}}>
                    {this.props.time} seconds
            </button>
        )
    }
}

export {TimerWrapper}