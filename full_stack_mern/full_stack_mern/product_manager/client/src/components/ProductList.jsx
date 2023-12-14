import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

const ProductList = ({ products }) => {
    return(
        <ul className='w-50 mx-auto list-group'>
            {
                products.map((product) => {
                    return (
                        <li className='list-group-item d-flex flex-column align-items-center' key={product._id}>
                            <Link className='text-decoration-none' to={`/products/${product._id}`}> { product.title }
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    ); 
}

export default ProductList;