import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const RegistrationForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");

    return (
        <>
          <Form className='w-50 mx-auto my-3'>
          <Form.Group className="mb-3 d-flex bg-light p-2 border border-light-50 rounded">
            <Form.Label className='w-50 text-secondary'>First Name</Form.Label>
            <Form.Control type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
          </Form.Group>
          {
            firstName.length === 1 ?
              <p class="text-danger text-sm"> First Name must be at least two characters</p> :
              ""
          }
          <Form.Group className="mb-3 d-flex bg-light p-2 border border-light-50 rounded">
            <Form.Label className='w-50 text-secondary'>Last Name</Form.Label>
            <Form.Control type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
          </Form.Group>
          {
            lastName.length === 1 ?
              <p class="text-danger text-sm"> Last Name must be at least two characters</p> :
              ""
          }
          <Form.Group className="mb-3 d-flex bg-light p-2 border border-light-50 rounded">
            <Form.Label className='w-50 text-secondary'>Email</Form.Label>
            <Form.Control type="email" value={email} onChange={ (e) => setEmail(e.target.value) }/>
          </Form.Group>
          {
            email.length > 0 && email.length < 5  ?
              <p class="text-danger text-sm"> Email must be at least five characters</p> :
              ""
          }
          <Form.Group className="mb-3 d-flex bg-light p-2 border border-light-50 rounded">
            <Form.Label className='w-50 text-secondary'>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={ (e) => setPassword(e.target.value) }/>
          </Form.Group>
          {
            password.length > 0 && password.length < 8  ?
              <p class="text-danger text-sm"> Password must be at least eight characters</p> :
              ""
          }
          <Form.Group className="mb-3 d-flex bg-light p-2 border border-light-50 rounded">
            <Form.Label className='w-50 text-secondary'>Confirm Password</Form.Label>
            <Form.Control type="password" value={cpassword} onChange={ (e) => setCpassword(e.target.value) }/>
          </Form.Group>
          {
            cpassword.length > 0 && cpassword.length < 8  ?
              <p class="text-danger text-sm"> Confirmation Password must be at least eight characters</p> :
              cpassword.length >= 8 && cpassword !==password ?
                <p class="text-danger text-sm"> Passwords don't match</p> :
                ""
          }
          </Form>
        </>
      );
}

export default RegistrationForm;