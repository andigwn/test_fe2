import axios from 'axios';
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
function Login({ title }) {

    const [username, setUsername] = useState("")

    const handleUserName = (inputUsername) => {
        setUsername(inputUsername)
    }

    const [password, setPassword] = useState("")

    const handlePassword = (inputPassword) => {
        setPassword(inputPassword)
    }

    const userLogin = () => {
        console.log("username", username);
        console.log("password", password);
    }

    return (
        <Container>
            <div className='d-flex justify-content-center fw-bold h3 my-4'>{title}</div>
            <Form className='w-50 mx-auto my-4'>
                <Form.Group className='mb-3'>
                    <Form.Label className='fw-bold' >Username</Form.Label>
                    <Form.Control type='text' placeholder='Massukan Username' onChange={(event) => handleUserName(event.target.value)} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label className='fw-bold' >Password</Form.Label>
                    <Form.Control type='password' placeholder='Massukan Password' onChange={(event) => handlePassword(event.target.value)} required />
                </Form.Group>
                <Button className='mt-4 w-100' onClick={() => userLogin()} variant='primary' type='submit'>Login</Button>
            </Form>
        </Container>
    );
}

export default Login;