import React, { useState, useEffect } from 'react';
import AddProduct from '../components/AddProduct';
import ProductList from '../components/ProductList';
import axios from 'axios';

const Main = () => {

    const [products, setProducts] = useState([]);
    const addNewProduct = (product) => {
        setProducts([...products, product])
    }
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((result => {
                console.log(result.data.products);
                setProducts(result.data.products)
            })).catch((err) => {
                console.log(err);
            })
    }, [])
    const removeFromDOM = (id) => {
        setProducts(products.filter((product) => {
            return product._id !== id;
        }))
    }

    return (
        <>
            <AddProduct addNewProduct={ addNewProduct } />
            <ProductList products={products} removeFromDOM={ removeFromDOM } />
        </>
    );
}

export default Main;