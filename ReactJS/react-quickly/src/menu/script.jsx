import React from 'react'

/*Menu component will render individual Link, the data are 
either hardcode or retreived from server*/
class Menu extends React.Component {
    render() {
        let menus = [ /* Data in this case is hard coded */
            'Home',
            'About',
            'Services',
            'Portfolio',
            'Contact us'
        ]

        return (
        <div>
            {menus.map((v, i) => {
                return <span key={i} style={{padding: '10px'}}><Link label={v}/></span>
            })}
        </div>
        )
    }    
}

/*Link component is created with props that will be used for
hyperlink reference and element*/
class Link extends React.Component {
    render() {
        const url='/' 
        + this.props.label
        .toLowerCase()
        .trim()
        .replace(' ', '-')

        return (
            <a href={url}>
                {this.props.label}
            </a>
        )
    }
}

export {Menu}