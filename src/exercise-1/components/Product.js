import React from 'react';
import '../styles/Product.css'

class Product extends React.Component{
    state={
        productList: [
            {name: 'Bicycle',
                id: 1,
                price: 30,
                quantity: 15,
                desc: 'Bicycle is Good'
            },
            {name: 'TV',
                id: 2,
                price: 40,
                quantity: 16,
                desc: 'TV is Good'
            },
            {name: 'Pencil',
                id: 3,
                price: 50,
                quantity: 17,
                desc: 'Pencil is Good'
            }
        ]
    }

    render(){
        const id = this.props.match.params.id;
        let product = this.state.productList[id-1];
        return <div className='product'>
            <h2>Product Detail:</h2>
            <p>Name: {product.name}</p>
            <p>Id: {product.id}</p>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Desc: {product.desc}</p>
            <p>URL: /products/{product.id}</p>
        </div>
    }
}
export default Product;
