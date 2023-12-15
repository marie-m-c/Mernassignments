import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const ProductList = ({ products, removeFromDOM }) => {

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res);
                removeFromDOM(id);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return(
        <ul className='w-25 mx-auto list-group'>
            {
                products.map((product) => {
                    return (
                        <li className='list-group-item d-flex justify-content-between' key={product._id}>
                            <Link className='text-decoration-none' to={`/products/${product._id}`}>
                                { product.title}
                            </Link>
                            <div>
                                <Link className='btn btn-warning me-4' to={`/edit/${product._id}`}>
                                    Edit
                                </Link>
                                <button className='btn btn-danger'
                                    onClick={() => deleteProduct(product._id)}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    ); 
}

export default ProductList;