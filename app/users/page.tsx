'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './page.module.css';


// Define the User interface
interface User {
    id: number;      // Unique identifier for the user.
    name: string;    // The user's full name.
    username: string; // The user's username or handle.
    email: string;   // The user's email address.
} 




function Users() {
    const [age, setAge] = useState<number>(0);
    const [startCount, setStartCount] = useState<number>(0);
    const [endCount, setEndCount] = useState<number>(1);
    const [users, setUsers] = useState<User[]>([]);
    const [stat, setStat] = useState<number>(0)

    const incr = () => {
        setStartCount(startCount + 1);
        setEndCount(endCount + 1);

        if (startCount && endCount >= users.length) {
            setStartCount(0);
            setEndCount(1);
        }
    }; // manipulating the array that coming back from the API to make sure it's only displaying on user per time 

    const generateRandomAge = (): number => {
        return Math.floor(Math.random() * 41) + 20;
    };
    // adding random number till we get api with age with it (age from 20 - 60)


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data);
                setStat(response.status);

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    // fetching the data using the axios from the server + plus error handling techniques 

    const getBirthYear = (currentYear: number, userAge: number) => {
        return currentYear - userAge;
    }; // Calculates the current year based on the number generated from the random function called generateRandomAge()


    

    return (
        <>

                {stat !== 200 ? 
                <div className={`${style.loading} d-flex justify-content-center align-items-center`}>
                    <div className="spinner-border  text-primary" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div> : ''} 
            {/* If it's still fetching the data the loading will display on the screen , when response status from the server is 200 we remove loading to see the profile page */}

            


            <div className={`main ${style.main}`}>
                <div className={`maincontainer ${style.maincontainer}`}>
                    <div className='container'>
                        <div className='row d-flex justify-content-center align-items-center'>
                            <div className={`usercard col-10 col-sm-8 col-md-8 col-lg-6   ${style.usercard} position-relative `}>
                                {users.slice(startCount, endCount).map(user => {
                                    const userAge = generateRandomAge();
                                    const birthYear = getBirthYear(2023, userAge);

                                    return (
                                        <div className='d-flex flex-column justify-content-center align-items-center' key={user.id}>
                                            <span className={`navFakeImage ${style.navFakeImage}  d-flex align-items-center justify-content-center`}>
                                                <span>{user.name.charAt(0)}</span>
                                            </span>
                                            <div className={`${style.carddata} text-center`}>
                                                <h2>{user.name}</h2>
                                                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
                                                    <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                                                    <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c-1.535 0 2.484 1.05 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                                                </svg> {user.email}</p>
                                                <div className={`${style.personalcard}`}>
                                                    <div>
                                                        <p>Date of birth: 14/2/{birthYear}</p>
                                                        <p>Age: {userAge}</p>
                                                        <p>Gender: Male</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className={`${style.changeuser} btn border border-1 text-white mt-2`} onClick={incr}>
                                                Change user
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Users;
