import React, { useState } from 'react'
import { Container, Form, FormGroup, Input, Label, Button, Spinner } from 'reactstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const BASE_URL = "http://localhost:3001"

const CreateUser = () => {
    const [loading, setLoading] = useState(false);
    const [dataSubmitted, setDataSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        roles: '',
        joining_date: '',
        designation: '',
        location: '',
    })

    const navigate = useNavigate()

    const submit = async () => {
        setDataSubmitted(true)
        if(formData.name === ''){
            setDataSubmitted(false)
            return
        }
        await axios.post(`${BASE_URL}/users`, formData)
        setDataSubmitted(false)
        navigate('/')
    }

    return (
        <Container className='p-5'>
            <h2 className='text-center'>Edit Empolyee Details</h2>
            <Form>
                <FormGroup>
                    <Label for="name">
                        Name
                    </Label>
                    <Input onChange={(e) => setFormData(prevValues => ({
                        ...prevValues,
                        [e.target.name]: e.target.value,
                    }))} id="name" name="name" placeholder="Enter Employee Name" value={formData.name} />
                </FormGroup>
                <FormGroup>
                    <Label for="designation">
                        Designation
                    </Label>
                    <Input onChange={(e) => setFormData(prevValues => ({
                        ...prevValues,
                        [e.target.name]: e.target.value,
                    }))} id="designation" name="designation" placeholder="Enter Employee designation" value={formData.designation} />
                </FormGroup>
                <FormGroup>
                    <Label for="age">
                        Age
                    </Label>
                    <Input onChange={(e) => setFormData(prevValues => ({
                        ...prevValues,
                        [e.target.name]: e.target.value,
                    }))} id="age" name="age" placeholder="Enter Employee Age" value={formData.age} />
                </FormGroup>
                <FormGroup>
                    <Label for="location">
                        Location
                    </Label>
                    <Input onChange={(e) => setFormData(prevValues => ({
                        ...prevValues,
                        [e.target.name]: e.target.value,
                    }))} id="location" name="location" placeholder="Enter Employee location" value={formData.location} />
                </FormGroup>
                <FormGroup>
                    <Label for="joining_date">
                        joining_date
                    </Label>
                    <Input onChange={(e) => setFormData(prevValues => ({
                        ...prevValues,
                        [e.target.name]: e.target.value,
                    }))} id="joining_date" name="joining_date" placeholder="Enter Employee Joining Date" value={formData.joining_date} />
                </FormGroup>
                <FormGroup>
                    <Label for="roles">
                        Roles
                    </Label>
                    <Input onChange={(e) => setFormData(prevValues => ({
                        ...prevValues,
                        [e.target.name]: e.target.value,
                    }))} id="roles" name="roles" placeholder="Enter Employee Joining Date" value={formData.roles} />
                </FormGroup>
            </Form>
            <Button onClick={submit} color="dark" outline>
                {!dataSubmitted && 'Submit'}
                {dataSubmitted && (
                    <Spinner color="success" />
                )}
            </Button>
        </Container>
    )
}

export default CreateUser
