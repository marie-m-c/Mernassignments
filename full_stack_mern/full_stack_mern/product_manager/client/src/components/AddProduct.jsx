import React, { useState } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

const AddProduct = ( { addNewProduct } ) => {

    const [inputObject, setInputObject] = useState({
        title: '',
        price: '',
        description: ''
    })

    const handelInputs = (e) => {
        setInputObject({
            ...inputObject,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', {...inputObject, price: inputObject.price + '$'})
            .then( result => {
                console.log(result.data.product)
                addNewProduct(result.data.product)
             })
            .catch( err => console.log(err) )
        setInputObject({ title: '', price: '',description: '' })
    }

    return (
        <div className='w-50 mx-auto my-4'>
            <h1 className='my-2 text-center'>Product Manager</h1>
            <form className='form p-4 d-flex flex-column align-items-center' onSubmit={handleSubmit}>
                <div className="form-group w-100 my-2 p-2 bg-light border border-light-50 rounded d-flex align-items-center">
                    <label className='w-25 p-2 text-secondary'>Title</label>
                    <input type="text" name="title" value={ inputObject.title } onChange={ handelInputs } className='form-control' />
                </div>
                <div className="form-group w-100 my-2 p-2 bg-light border border-light-50 rounded d-flex align-items-center">
                    <label className='w-25 p-2 text-secondary'>Price</label>
                    <input type="text" name="price" value={ inputObject.price } onChange={ handelInputs } className='form-control' />
                </div>
                <div className="form-group w-100 my-2 p-2 bg-light border border-light-50 rounded d-flex align-items-center">
                    <label className='w-25 p-2 text-secondary'>Description</label>
                    <input type="text" name="description" value={ inputObject.description } onChange={ handelInputs } className='form-control' />
                </div>
                <input type="submit" value="Create" className='btn btn-primary w-25' />
            </form>
        </div>
    );
}

export default AddProduct;