import React, {Component} from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
    }

    componentDidMount() {
        const oneSecond = 1000;
        this.intervalId = setInterval( () => {
            this.setState({
                time: new Date()
            })
        }, oneSecond)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState.time);
    }
    
    componentWillUnmount() {
        clearInterval(this.IntervalId);
    }

    render() {
        return(
            <>
                <div>
                    {this.state.time.toLocaleTimeString()}
                </div>
            </>
        )
    }
}

export default Clock;
