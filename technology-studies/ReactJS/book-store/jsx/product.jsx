// uses property from its route to trigger actions
// this.props.route.addToCart() add 
import React from 'react'
import { Link } from 'react-router'

class Product extends React.Componnet {
    constructor(props) {
        super(props)
        this.handleBuy = this.handleBuy.bind(this)
    }

    handleBuy (event) {
        this.props.route.addToCart(this.props.params.id)
    }

    render() {
        return (
            <div>
                <img src={this.props.route.products[this.props.params.id].src}
                    style={{heigh: '80%'}}/>
                <p>{this.props.route.products[this.props.params.id].title}</p>
                <Link
                    to={{
                        pathname: `/cart`,
                        state: { productId: this.props.params.id}
                    }}
                    onClick={this.handleBuy}
                    className="btn btn-primary">
                        Buy
                </Link>
            </div>
        )
    }
}

export {Product}