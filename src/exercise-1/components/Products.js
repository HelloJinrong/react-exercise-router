import React from 'react'
import {Link} from "react-router-dom";
import '../styles/Products.css'
class Products extends React.Component{
    constructor(props) {
        super(props);
        const productList=[
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
        ];
        this.state={
            products:productList
        }
    }

    render() {
        return <div className='products'>
            <h1>All Products:</h1>
            <ul>
                {
                    this.state.products.map(item => (
                        <li key={item.id}>
                            <Link
                                to={`/products/${item.id}`}
                                style={{color:'darkgray'}}>
                                {item.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    }
}

export default Products;
