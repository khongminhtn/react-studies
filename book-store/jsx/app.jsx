/* Setting up main imports, booking information and routes */
import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory,
        Router,
        Route,
        IndexRoute,
        Link,
        IndexRoute,
        } from 'react-router';

import Modal from './modal.jsx';
import Cart from "./cart.jsx";
import Checkout from "./checkout.jsx";
import Product from "./product.jsx"

// Array of book data for the time being to avoid using server.
// it is an imitation of a server's data.
const PRODUCTS = [
    { 
        id: 0, 
        src: 'images/proexpress-cover.jpg',
        title: 'Pro Express.js', 
        url: 'http://amzn.to/1D6qiqk' 
    },
    {   
        id: 1, 
        src: 'images/practicalnode-cover.jpeg',
        title: 'Practical Node.js', 
        url: 'http://amzn.to/NuQ0fM' },
    {   
        id: 2, 
        src: 'images/expressapiref-cover.jpg',
        title: 'Express API Reference', 
        url: 'http://amzn.to/1xcHanf' },
    {   
        id: 3, 
        src: 'images/reactquickly-cover.jpg',
        title: 'React Quickly',
        url: 'https://www.manning.com/books/react-quickly'
    },
    {   
        id: 4, 
        src: 'images/fullstack-cover.png',
        title: 'Full Stack JavaScript',
        url: 'http://www.apress.com/9781484217504'
    }
]

// Stateless components
const Heading = () => {
    return <h1>Tueyn Book Store</h1>
}

const Copy = () => {
    return (
        <p>
            Please click on a book to view details in a modal. You can 
            copy/paste the link of the modal. The link wil lopen the 
            book on a seperate page.
        </p>
    )
}


class App extends React.Component {
    // takes following properties as its argument
    // good place to determine whether this view is a modal
    componentWillReceiveProps(nextProps) {
        this.isModal = (nextProps.location.state 
            && nextProps.location.state.modal)
        if (this.isModal 
            && nextProps.location.key 
            !== this.props.location.key) {
            this.previousChildren = this.props.children
        } 
    }

    render() {
        console.log('Modal: ', this.isModal)
        return (
            <div className="well">
                <Heading/>
                <div>
                    {(this.isModal) ? 
                    this.previousChildren : this.props.children}

                    {(this.isModal) ?
                        <Modal 
                        isOpen={true} 
                        returnTo={this.props.location.state.returnTo}>  
                            {this.props.children}
                        </Modal> : ""
                    }
                </div>
            </div>
        )
    }
}


class Index extends React.Component {

}


let cartItems = {}
const addToCart = (id) => {
    if (cartItems[id])
        cartItems[id] += 1
    else
        cartItems[id] = 1
}

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index}/>
            <Route path="/products/:id" 
                component={Product}
                addToCart={addToCart}
                products={PRODUCTS} />
            <Route path="/cart" 
                component={Cart}
                cartItem={cartItems}
                products={PRODUCTS} />
        </Route>
        <Route path="/checkout"
            component={Checkout}
            cartItems={cartItems}
            products={PRODUCTS} />
    </Router>), document.getElementById('content'))