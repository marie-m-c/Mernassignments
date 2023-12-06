import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const Display = (props) => {
    return (
        <div class="w-50 mx-auto d-flex flex-column align-items-center">
            <h3>Your Form Data</h3>
            <div class="w-100 d-flex justify-content-between mt-1">
                <p class="w-50">First Name</p>
                <p class="w-50"> { props.fName } </p>
            </div>
            <div class="w-100 d-flex justify-content-between mt-1">
                <p class="w-50">Last Name</p>
                <p class="w-50"> { props.lName } </p>
            </div>
            <div class="w-100 d-flex justify-content-between mt-1">
                <p class="w-50">Email</p>
                <p class="w-50"> { props.email } </p>
            </div>
            <div class="w-100 d-flex justify-content-between mt-1">
                <p class="w-50">Password</p>
                <p class="w-50"> { props.pass } </p>
            </div>
            <div class="w-100 d-flex justify-content-between mt-1">
                <p class="w-50">Confirm Password</p>
                <p class="w-50"> { props.cpass } </p>
            </div>
        </div>
    );
}

export default Display