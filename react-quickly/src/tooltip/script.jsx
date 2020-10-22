import React from 'react'
import ReactDOM from 'react-dom'

/* Tooltip is a stateful component, where it will have the ability
to toggle on or off the css that will render the tooltip box*/
class Tooltip extends React.Component {
    constructor(props) {
        super(props)
        this.state = {opacity: false}
        this.toggle = this.toggle.bind(this) /* binds the toggle() func to this class */
    };
    /* auto binding would be possible by using the arrow(=>) function
    but manual binding was used for studying purpose*/ 
    toggle() {
        /* Used ES6 destructuring for elegance. Used findDOMNode to select 
        the correct positioning of the element to be able to display tooltip */
        const {offsetTop: top, offsetLeft: left} = ReactDOM.findDOMNode(this)
        this.setState({
            opacity: !this.state.opacity,
            top,
            left
        })
    };
    render() {
        const style = {
            zIndex: (this.state.opacity) ? 1000:-1000,
            opacity: +this.state.opacity,
            top: (this.state.top || 0) + 20,
            left: (this.state.left || 0) - 30
        }
        return (
            <div style={{display:'inline-block'}}>
                <span style={{color: 'blue'}}
                    onMouseEnter={this.toggle}
                    onMouseOut={this.toggle}>
                    {this.props.children}
                </span>
                <div className="tooltip bottom"
                    style={style}
                    role="tooltip">
                    <div className="tooltip-arrow"></div>
                    <div className="tooltip-inner">{this.props.text}</div>
                </div>
            </div>
        )
    };
};

export {Tooltip}