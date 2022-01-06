import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import Users from './components/Users';

function App() {
    return (
        <Container className='d-flex flex-column  align-items-center'>
            <h1 className='text-center mt-2'>Users</h1>
            <Link to="/create" style={{
                textDecoration: 'none',
                margin: '1rem',
            }}>
                <Button color="warning" style={{
                    fontSize: '2rem',
                    color: "#fff",
                    height: '3rem',
                    width: '3rem',
                    display: "flex",
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                }}>
                    +
                </Button>
            </Link>
            <Users />
        </Container>
    );
}

export default App;