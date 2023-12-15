import React, { useState, useEffect } from 'react';
import  { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const ProductDetails = () => {

    const [product, setProduct] = useState({});
    const { id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(result => {
                console.log(result.data.product);
                setProduct(result.data.product)
            })
            .catch(err => console.log(err))
    }, [])
    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res);
                navigate('/products')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return(
        <div className='w-50 p-4 mx-auto my-4 bg-light border border-light-50 d-flex flex-column align-items-center'>
            <h3 className='text-secondary'>{ product.title }</h3>
            <p className='text-warning'>{ product.price }</p>
            <p className='text-secondary'>{ product.description }</p>
            <button className='btn btn-danger'onClick={() => deleteProduct(product._id)}>
                Delete
            </button>
        </div>
    );

}

export default ProductDetails;