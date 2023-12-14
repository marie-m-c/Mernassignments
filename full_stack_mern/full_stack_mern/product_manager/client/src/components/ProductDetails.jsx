import React, { useState, useEffect } from 'react';
import  { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const ProductDetails = () => {

    const [product, setProduct] = useState({});
    const { id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(result => {
                console.log(result.data.product);
                setProduct(result.data.product)
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <div className='w-50 p-4 mx-auto my-4 bg-light border border-light-50 d-flex flex-column align-items-center'>
            <h3 className='text-secondary'>{ product.title }</h3>
            <p className='text-warning'>{ product.price }</p>
            <p className='text-secondary'>{ product.description }</p>
        </div>
    );

}

export default ProductDetails;