import React from 'react'
import ReactDOM from 'react-dom'

/*Menu component will render individual link tags, these tags are 
either hardcode or retreived from server*/
class Menu extends React.Component {
    render() {
        let menus = [
            'Home',
            'Services',
            'Portfolio',
            'Contact us'
        ]
        return React.createElement('div', null, menus.map((v, i) => {
            return React.createElement('div', 
                {key: i}, 
                React.createElement(Link, {label: v})
                )
        }))
    }    
}

class Link extends React.Component {

}

ReactDOM.render(
    React.createElement(Menu, null),
    document.getElementById("menu")
)