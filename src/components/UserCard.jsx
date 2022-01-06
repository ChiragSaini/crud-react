import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, Modal, Row, Col, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'

const UserCard = ({ userData, deleteUser }) => {
    const [modalActive, setModalActive] = useState(false);
    const { name, designation, age, location, joining_date, roles } = userData;

    return (
        <Card className='mb-2' style={{
            borderRadius: '10px',
        }}>
            <CardBody>
                <Row>
                    <Col className='text-center' style={{
                        display: 'flex',
                        flexDirection: "column",
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <CardTitle tag="h3">{name}</CardTitle>
                        <CardSubtitle className='mb-2 text-muted'>
                            {designation}
                        </CardSubtitle>
                    </Col>
                    <Col>
                        <p>Age: {age}</p>
                        <p>Location: {location}</p>
                        <p>Joining Date: {joining_date}</p>
                        <p>Roles:
                            {Array.isArray(roles) ? roles.join(', ') : roles}
                        </p>
                    </Col>
                    <Col>
                        <Link style={{
                            textDecoration: 'none',
                        }} to={`/edit/${userData.id}`}>
                            <Button className='m-2' color="success">
                                Edit
                            </Button>
                        </Link>
                        <Button className='m-2' color="danger" onClick={() => setModalActive(true)}>Delete</Button>
                    </Col>
                </Row>
            </CardBody>
            {modalActive && (
                <Modal isOpen={modalActive} onExit={() => setModalActive(false)}>
                    <ModalHeader>
                        DELETE!
                    </ModalHeader>
                    <ModalBody>
                        Are you sure you want to delete this user?
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={() => deleteUser(userData.id)}
                        >
                            DELETE
                        </Button>
                        {' '}
                        <Button onClick={() => setModalActive(false)}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            )}
        </Card>
    )
}

export default UserCard
