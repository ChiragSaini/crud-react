import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Container, Form, FormGroup, Input, Label, Button, Spinner } from 'reactstrap'
import axios from 'axios'

const BASE_URL = "http://localhost:3001"

const getUserData = async (id) => {
    const res = await axios.get(`${BASE_URL}/users/${id}`);
    return res.data;
}

const EditForm = () => {
    const [initialData, setInitialData] = useState(null)
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

    const fetch = async () => {
        setLoading(true)
        const data = await getUserData(params.id);
        setInitialData({
            ...data,
            roles: Array.isArray(data.role) ? data.roles.join(',') : data.roles
        })
        setFormData({
            ...data,
            roles: Array.isArray(data.role) ? data.roles.join(',') : data.roles
        });
        setLoading(false);
    }
    const params = useParams();
    useEffect(async () => {
        if (params.id) {
            await fetch()
        }
    }, [params])

    if (loading) {
        return (
            <Container className='p-5'>
                <h2 className='text-center'>Edit Empolyee Details</h2>
                <Spinner type='grow' style={{
                    height: '5rem',
                    width: '5rem',
                }} />
            </Container>
        )
    }

    const submit = async () => {
        setDataSubmitted(true)
        await axios.put(`${BASE_URL}/users/${params.id}`, formData)
        await fetch();
        setDataSubmitted(false)
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
            <Button onClick={submit} color="dark" outline disabled={JSON.stringify(formData) === JSON.stringify(initialData)}>
                {!dataSubmitted && 'Submit'}
                {dataSubmitted && (
                    <Spinner color="success" />
                )}
            </Button>
        </Container>
    )
}

export default EditForm
