import React from 'react'

module.exports = class Router extends React.Component {
    consutructor(props) {
        super(props)
        this.updateHash = this.updateHash.bind(this)
        this.state = {
            hash: window.location.hash
        }
    }

    updateHash(event) {
        this.setState({hash: window.location.hash})
    }

    componentDidMount() {
        window.addEventListener('hashchange', this.updateHash, false)
    }

    componentWillUnmount() {
        window.removeEventListener('hashchange', this.updateHash, false)
    }

    render() {
        if (this.props.mapping[this.state.hash])
            return this.props.mapping[this.state.hash]
        else
            return this.props.mapping['*']
    }
}