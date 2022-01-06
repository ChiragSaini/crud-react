import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import axios from 'axios';
import { Spinner } from 'reactstrap';

const BASE_URL = "http://localhost:3001"

const getUserData = async () => {
    const res = await axios.get(`${BASE_URL}/users`);
    return res.data;
}

const Users = () => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetch = async () => {
        setLoading(true)
        const res = await getUserData()
        setUsers(res);
        setLoading(false)
    }

    useEffect(async () => {
        await fetch();
    }, []);

    const deleteUser = async (id) => {
        const BASE_URL = "http://localhost:3001"
        await axios.delete(`${BASE_URL}/users/${id}`);
        await fetch();
    }
    return (
        <div>
            {
                loading && <Spinner style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    width: '5rem',
                    height: '5rem',
                }} color="warning"
                type="grow">Loading...</Spinner>
            }
            {
                users && users.length > 0 && users.map(user => <UserCard key={user.id} userData={user} deleteUser={deleteUser} />)
            }
            {
                users && users.length === 0 && <h1 className='text-center'>NO USERS FOUND</h1>
            }
        </div>
    )
}

export default Users
