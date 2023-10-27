'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios
import style from './page.module.css';


interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    // Add other properties as needed
}


function Users() {

    const [age, setAge] = useState<number>(0)
    const [startCount, setStartCount] = useState<number>(0);
    const [endCount, setEndCount] = useState<number>(1);
    const [users, setUsers] = useState<User[]>([]);
    // State to store users data

    const incr = () => {
        setStartCount(startCount + 1);
        setEndCount(endCount + 1);

        if (startCount && endCount >= users.length) {
            setStartCount(0);
            setEndCount(1);
        }
    };

    useEffect(() => {
        // Fetch data when the component mounts
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <>
            <div className={`main ${style.main}`}>
                <div className={`maincontainer ${style.maincontainer}`}>
                    <div className='container'>
                        <div className='row'>
                            <p className='text-success'>{startCount}</p>
                            <p className='text-success'>{endCount}</p>
                            <p>{ }</p>
                            <button className='btn btn-success' onClick={incr}>
                                Click
                            </button>
                            <div className={`usercard ${style.usercard} mt-3 `}>
                                <div>
                                    {users.slice(startCount, endCount).map(user => (
                                        <div key={user.id}>
                                            <span className={`navFakeImage ${style.navFakeImage}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                            </svg></span>
                                            <p>{user.name}</p>
                                            <p>{user.email}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Users;
