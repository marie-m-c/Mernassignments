import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import Display from './Display';

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
          <Form.Group className="mb-3 d-flex bg-light p-2 border border-light-50 rounded">
            <Form.Label className='w-50 text-secondary'>Last Name</Form.Label>
            <Form.Control type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
          </Form.Group>
          <Form.Group className="mb-3 d-flex bg-light p-2 border border-light-50 rounded">
            <Form.Label className='w-50 text-secondary'>Email</Form.Label>
            <Form.Control type="email" value={email} onChange={ (e) => setEmail(e.target.value) }/>
          </Form.Group>
          <Form.Group className="mb-3 d-flex bg-light p-2 border border-light-50 rounded">
            <Form.Label className='w-50 text-secondary'>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={ (e) => setPassword(e.target.value) }/>
          </Form.Group>
          <Form.Group className="mb-3 d-flex bg-light p-2 border border-light-50 rounded">
            <Form.Label className='w-50 text-secondary'>Confirm Password</Form.Label>
            <Form.Control type="password" value={cpassword} onChange={ (e) => setCpassword(e.target.value) }/>
          </Form.Group>
          </Form>
          <Display fName={ firstName } lName={ lastName } email={ email } pass={ password } cpass={ cpassword } />
        </>
      );
}

export default RegistrationForm;